import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(req: Request) {
  try {
    const { name, email, company, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required form fields.' }, { status: 400 });
    }

    console.log(`Received contact query from ${name} (${email}) - Company: ${company || 'None'}`);
    console.log(`Message Details: ${message}`);

    if (resend) {
      // Send receipt to Jon Roseman's press management
      await resend.emails.send({
        from: 'Jon Roseman Portfolio <onboarding@resend.dev>',
        to: process.env.CONTACT_RECEIVER_EMAIL || 'management@jonroseman.com',
        subject: `New Press/Inquiry Booking from ${name}`,
        html: `
          <h3>New Inquiry from Website Portfolio</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || 'Not Specified'}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br/>')}</p>
        `,
      });
    } else {
      console.warn("Resend API Key is missing. Message received and printed to stdout.");
    }

    return NextResponse.json({ success: true, message: 'Message sent successfully.' });
  } catch (err: any) {
    console.error('Contact form submission error:', err);
    return NextResponse.json({ error: err.message || 'Internal Server Error' }, { status: 500 });
  }
}
