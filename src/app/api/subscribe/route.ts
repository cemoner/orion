// In: src/app/api/send-newsletter/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import admin from 'firebase-admin';

// This satisfies TypeScript's 'possibly undefined' error by ensuring variables exist.
const firebaseProjectId = process.env.FIREBASE_PROJECT_ID;
const firebaseClientEmail = process.env.FIREBASE_CLIENT_EMAIL;
const firebasePrivateKey = process.env.FIREBASE_PRIVATE_KEY;
const resendApiKey = process.env.RESEND_API_KEY;
const cronSecret = process.env.CRON_SECRET;

if (
  !firebaseProjectId ||
  !firebaseClientEmail ||
  !firebasePrivateKey ||
  !resendApiKey ||
  !cronSecret
) {
  throw new Error('Missing required environment variables');
}

// (Firebase Admin initialization code - can be refactored into a helper)
if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: firebaseProjectId,
        clientEmail: firebaseClientEmail,
        privateKey: firebasePrivateKey.replace(/\\n/g, '\n'),
      }),
    });
  } catch (error) {
    if (error instanceof Error) {
        console.error('Firebase admin initialization error:', error.message);
    } else {
        console.error('An unknown error occurred during Firebase admin initialization');
    }
  }
}

const db = admin.firestore();
const resend = new Resend(resendApiKey);

// --- Helper Function to Get Iron Price ---
// In a real app, you would fetch this from a service like commodities-api.com
async function getIronPrice() {
  // Placeholder: returns a random price for demonstration
  const price = (Math.random() * (120 - 100) + 100).toFixed(2);
  return `$${price} / ton`;
}

export async function GET(req: NextRequest) {
  // Secure your cron job with a secret
  const authHeader = req.headers.get('authorization');
  if (authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const [price, subscribersSnapshot] = await Promise.all([
      getIronPrice(),
      db.collection('subscribers').get(),
    ]);

    if (subscribersSnapshot.empty) {
      return NextResponse.json({ message: 'No subscribers to email.' });
    }

    const emails = subscribersSnapshot.docs.map(doc => doc.data().email);
    
    // You can use React Email to build beautiful templates
    const emailHtml = `
      <html>
        <body>
          <h1>Daily Iron Price Update</h1>
          <p>Hello!</p>
          <p>Today's iron price is: <strong>${price}</strong>.</p>
          <p>Have a great day!</p>
        </body>
      </html>
    `;

    await resend.emails.send({
      from: 'Orion Demir <info@oriondemir.com.tr>',
      to: emails, // Resend handles batching
      subject: `Daily Iron Price: ${new Date().toLocaleDateString()}`,
      html: emailHtml,
    });

    return NextResponse.json({ message: 'Newsletter sent successfully!' });
  } catch (error) {
    if (error instanceof Error) {
        console.error('Failed to send newsletter:', error.message);
    }
    return NextResponse.json({ error: 'Failed to send newsletter.' }, { status: 500 });
  }
}