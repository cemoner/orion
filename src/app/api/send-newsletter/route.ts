// In: src/app/api/subscribe/route.ts

import { NextRequest, NextResponse } from 'next/server';
import admin from 'firebase-admin';

// This satisfies TypeScript's 'possibly undefined' error by ensuring variables exist.
const firebaseProjectId = process.env.FIREBASE_PROJECT_ID;
const firebaseClientEmail = process.env.FIREBASE_CLIENT_EMAIL;
const firebasePrivateKey = process.env.FIREBASE_PRIVATE_KEY;

if (!firebaseProjectId || !firebaseClientEmail || !firebasePrivateKey) {
  throw new Error('Missing Firebase environment variables');
}

// Initialize Firebase Admin
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
    // This handles the 'unknown' type for the error object.
    if (error instanceof Error) {
      console.error('Firebase admin initialization error:', error.message);
    } else {
      console.error('An unknown error occurred during Firebase admin initialization');
    }
  }
}

const db = admin.firestore();

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !/.+@.+\..+/.test(email)) {
    return NextResponse.json({ error: 'A valid email is required.' }, { status: 400 });
  }

  try {
    const subscribersRef = db.collection('subscribers');
    const snapshot = await subscribersRef.where('email', '==', email).get();

    if (!snapshot.empty) {
      return NextResponse.json({ error: 'This email is already subscribed.' }, { status: 400 });
    }

    await subscribersRef.add({
      email: email,
      subscribedAt: new Date(),
    });

    return NextResponse.json({ successMessage: 'Thank you for subscribing!' }, { status: 201 });
  } catch (error) {
    // This handles the 'unknown' type for the error object.
    if (error instanceof Error) {
        console.error('Subscription error:', error.message);
    }
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}