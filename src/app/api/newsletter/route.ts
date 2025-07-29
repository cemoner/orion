import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { message: 'newsletter.invalid_email' },
        { status: 400 }
      );
    }

    const DATACENTER = process.env.MAILCHIMP_SERVER_PREFIX;
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

    if (!DATACENTER || !API_KEY || !AUDIENCE_ID) {
      return NextResponse.json(
        { message: 'newsletter.config_error' },
        { status: 500 }
      );
    }

    const data = {
      email_address: email,
      status: 'subscribed',
    };

    const response = await fetch(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
      {
        method: 'POST',
        headers: {
          Authorization: `apikey ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );

    const result = await response.json();

    if (response.status >= 400) {
      const alreadySubscribed = result.title === 'Member Exists';
      return NextResponse.json(
        {
          message: alreadySubscribed
            ? 'newsletter.already_subscribed'
            : 'newsletter.error_generic',
        },
        { status: alreadySubscribed ? 400 : 500 }
      );
    }

    return NextResponse.json(
      { message: 'newsletter.success' },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'newsletter.error_generic' },
      

      { status: 500 }
    );
  }
}
