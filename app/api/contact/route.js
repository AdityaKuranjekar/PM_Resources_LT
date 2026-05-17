import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    // Safety check for Vercel/Next.js environment setup
    if (!apiKey) {
      console.error("CRITICAL ERROR: RESEND_API_KEY environment variable is missing.");
      return NextResponse.json(
        { error: 'Email service is temporarily misconfigured.' },
        { status: 500 }
      );
    }

    // Lazily initialize Resend only when a request is made (avoids build-time crashes)
    const resend = new Resend(apiKey);

    const { name, email, message } = await req.json();

    // Field validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // 1. Send notification email to YOUR inbox (Aditya)
    const { data, error } = await resend.emails.send({
      from: 'PM Site Contact Form <onboarding@resend.dev>',
      to: 'adityak12util1@gmail.com',
      subject: `New PM Site Contact from ${name}`,
      reply_to: email, // Click "Reply" in your inbox to email them back instantly!
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

    // 2. --- FAILS-AFE GOOGLE SHEETS LOGGING ---
    // If the Google Sheets Webhook URL is set in environment variables, log the lead to the spreadsheet
    if (process.env.GOOGLE_SHEETS_WEBHOOK_URL) {
      try {
        await fetch(process.env.GOOGLE_SHEETS_WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, message }),
        });
        console.log("Logged submission to Google Sheets successfully.");
      } catch (sheetsErr) {
        console.warn("Google Sheets logging skipped or failed:", sheetsErr.message);
      }
    }

    // 3. --- FAILS-AFE AUTO-RESPONDER ---
    // Sends a beautiful automated thank-you reply directly to the person who filled out the form.
    // Wraps in a try-catch so it won't crash in Sandbox Mode (which blocks external unverified recipients).
    // Once a custom domain is verified in Resend, this will deliver instantly to the user!
    try {
      await resend.emails.send({
        from: 'Aditya Kuranjekar <onboarding@resend.dev>',
        to: email,
        subject: 'Thank you for reaching out! | Aditya Kuranjekar',
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <title>Thank You</title>
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; color: #1f2937; line-height: 1.5; margin: 0; padding: 20px; background-color: #f3f4f6; }
              .card { max-width: 580px; margin: 0 auto; background: #ffffff; padding: 32px; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03); border: 1px solid #e5e7eb; }
              .header { border-bottom: 2px solid #f3f4f6; padding-bottom: 16px; margin-bottom: 24px; }
              .title { font-size: 20px; font-weight: 700; color: #111827; margin: 0; letter-spacing: -0.02em; }
              .content { font-size: 15px; color: #374151; line-height: 1.6; }
              .quote { border-left: 3px solid #e5e7eb; padding-left: 16px; color: #6b7280; font-style: italic; margin: 20px 0; }
              .footer { font-size: 12px; color: #9ca3af; margin-top: 32px; border-top: 1px solid #f3f4f6; padding-top: 16px; text-align: center; }
            </style>
          </head>
          <body>
            <div class="card">
              <div class="header">
                <h1 class="title">Thanks for connecting, ${name}!</h1>
              </div>
              <div class="content">
                <p>Hi ${name},</p>
                <p>Thank you for getting in touch. I have received your message regarding product management and will review it shortly. I appreciate you taking the time to write, and I usually get back to queries within 24 to 48 hours.</p>
                <p>For your records, here is a copy of what you sent:</p>
                <div class="quote">
                  ${message}
                </div>
                <p>Talk soon,<br/><strong>Aditya Kuranjekar</strong></p>
              </div>
              <div class="footer">
                This is an automated reply from my Product Management Resource Site.
              </div>
            </div>
          </body>
          </html>
        `
      });
      console.log("Auto-reply sent successfully.");
    } catch (autoReplyErr) {
      console.warn("Auto-reply skipped/failed (likely Resend Sandbox restrictions):", autoReplyErr.message);
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
