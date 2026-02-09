import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface BookItem {
  bookTitle: string;
  quantity: number;
}

interface OrderFormData {
  fullName: string;
  email: string;
  mobile: string;
  streetAddress: string;
  cityTown: string;
  county: string;
  postCode: string;
  books: BookItem[];
  captchaQuestion: string;
  captchaAnswer: string;
  website: string; // honeypot
  loadedAt: number; // timestamp
}

export async function POST(request: NextRequest) {
  try {
    const body: OrderFormData = await request.json();

    // Honeypot check — bots auto-fill this hidden field
    if (body.website) {
      // Silently accept to not tip off the bot
      return NextResponse.json({ success: true });
    }

    // Time-based check — reject if submitted too fast (< 3 seconds)
    const now = Date.now();
    if (body.loadedAt && now - body.loadedAt < 3000) {
      return NextResponse.json({ success: true });
    }

    // Captcha verification — re-evaluate the math question
    const captchaMatch = body.captchaQuestion?.match(/What is (\d+) \+ (\d+)\?/);
    if (!captchaMatch) {
      return NextResponse.json({ error: 'Invalid captcha.' }, { status: 400 });
    }
    const expectedAnswer = parseInt(captchaMatch[1]) + parseInt(captchaMatch[2]);
    if (parseInt(body.captchaAnswer) !== expectedAnswer) {
      return NextResponse.json({ error: 'Incorrect captcha answer.' }, { status: 400 });
    }

    // Validate required fields
    const { fullName, email, mobile, streetAddress, cityTown, postCode, books } = body;
    if (!fullName || !email || !mobile || !streetAddress || !cityTown || !postCode) {
      return NextResponse.json({ error: 'Please fill in all required fields.' }, { status: 400 });
    }
    if (!books || books.length === 0) {
      return NextResponse.json({ error: 'Please add at least one book.' }, { status: 400 });
    }
    for (const book of books) {
      if (!book.bookTitle || !book.quantity || book.quantity < 1) {
        return NextResponse.json({ error: 'Each book must have a title and quantity.' }, { status: 400 });
      }
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

    // Build the email HTML
    const booksHtml = books
      .map(
        (b, i) =>
          `<tr>
            <td style="padding: 8px; border: 1px solid #ddd;">${i + 1}</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(b.bookTitle)}</td>
            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">${b.quantity}</td>
          </tr>`
      )
      .join('');

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1b5e3f; border-bottom: 2px solid #1b5e3f; padding-bottom: 10px;">
          New Book Order — Islamic Literature
        </h2>

        <h3 style="color: #333;">Customer Details</h3>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr><td style="padding: 6px 12px; font-weight: bold; width: 140px;">Full Name</td><td style="padding: 6px 12px;">${escapeHtml(fullName)}</td></tr>
          <tr style="background: #f9f9f9;"><td style="padding: 6px 12px; font-weight: bold;">Email</td><td style="padding: 6px 12px;">${escapeHtml(email)}</td></tr>
          <tr><td style="padding: 6px 12px; font-weight: bold;">Mobile</td><td style="padding: 6px 12px;">${escapeHtml(mobile)}</td></tr>
        </table>

        <h3 style="color: #333;">Delivery Address</h3>
        <p style="margin: 4px 0;">${escapeHtml(streetAddress)}</p>
        <p style="margin: 4px 0;">${escapeHtml(cityTown)}${body.county ? ', ' + escapeHtml(body.county) : ''}</p>
        <p style="margin: 4px 0; font-weight: bold;">${escapeHtml(postCode)}</p>

        <h3 style="color: #333; margin-top: 20px;">Books Ordered</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr style="background: #1b5e3f; color: white;">
              <th style="padding: 8px; border: 1px solid #ddd; width: 40px;">#</th>
              <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Book Title</th>
              <th style="padding: 8px; border: 1px solid #ddd; width: 80px;">Qty</th>
            </tr>
          </thead>
          <tbody>${booksHtml}</tbody>
        </table>

        <p style="margin-top: 20px; font-size: 12px; color: #888;">
          This order was submitted via the Al-Madinah Institute website.
        </p>
      </div>
    `;

    // Send email
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'info@al-madinah.org.uk',
      replyTo: email,
      subject: `Book Order from ${fullName}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Order submission error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again or contact us directly.' },
      { status: 500 }
    );
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
