import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Field validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Send email using Resend SDK
    // 'onboarding@resend.dev' is the default sandbox domain provided by Resend,
    // which works instantly without requiring domain verification.
    const { data, error } = await resend.emails.send({
      from: 'PM Site Contact Form <onboarding@resend.dev>',
      to: 'adityak12util1@gmail.com',
      subject: `New PM Site Contact from ${name}`,
      reply_to: email, // Allows you to reply directly to the sender from your inbox
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>New PM Site Contact</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; color: #1f2937; line-height: 1.5; margin: 0; padding: 20px; background-color: #f3f4f6; }
            .card { max-width: 580px; margin: 0 auto; background: #ffffff; padding: 32px; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03); border: 1px solid #e5e7eb; }
            .header { border-bottom: 2px solid #f3f4f6; padding-bottom: 16px; margin-bottom: 24px; }
            .title { font-size: 20px; font-weight: 700; color: #111827; margin: 0; letter-spacing: -0.02em; }
            .label { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #9ca3af; margin-bottom: 4px; }
            .value { font-size: 15px; color: #1f2937; margin-bottom: 20px; }
            .message-box { background: #fafafa; border: 1px solid #f3f4f6; padding: 16px; border-radius: 8px; font-size: 15px; color: #374151; white-space: pre-wrap; line-height: 1.6; }
            .footer { font-size: 12px; color: #9ca3af; margin-top: 32px; border-top: 1px solid #f3f4f6; padding-top: 16px; text-align: center; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="header">
              <h1 class="title">New Message received</h1>
            </div>
            
            <div>
              <div class="label">Sender Name</div>
              <div class="value">${name}</div>
            </div>
            
            <div>
              <div class="label">Sender Email</div>
              <div class="value"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none; font-weight: 500;">${email}</a></div>
            </div>
            
            <div>
              <div class="label">Message</div>
              <div class="message-box">${message}</div>
            </div>
            
            <div class="footer">
              Sent via Next.js API Route & Resend Integration on PM Resources Site.
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend SDK Error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('API Handler Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
