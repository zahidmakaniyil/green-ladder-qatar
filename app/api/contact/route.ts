import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, phone, service, message } = body;

        // Validate required fields
        if (!name || !email || !phone || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Create transporter using cPanel SMTP settings
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'greenladderqatar.com',
            port: parseInt(process.env.SMTP_PORT || '465'),
            secure: true, // true for port 465 (SSL/TLS)
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Email content for the company
        const mailOptionsToCompany = {
            from: `"Green Ladder Website" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
            replyTo: email,
            subject: `New Contact Form Submission - ${service || 'General Inquiry'}`,
            html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #17b457 0%, #0d8a3f 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-top: none; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #17b457; }
            .value { margin-top: 5px; }
            .message-box { background: white; padding: 15px; border-radius: 8px; border: 1px solid #ddd; margin-top: 10px; }
            .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2 style="margin: 0;">New Contact Form Submission</h2>
              <p style="margin: 5px 0 0 0; opacity: 0.9;">Green Ladder Qatar Website</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">👤 Name</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">📧 Email</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              <div class="field">
                <div class="label">📱 Phone</div>
                <div class="value"><a href="tel:${phone}">${phone}</a></div>
              </div>
              ${service ? `
              <div class="field">
                <div class="label">🔧 Service Interested In</div>
                <div class="value">${service}</div>
              </div>
              ` : ''}
              <div class="field">
                <div class="label">💬 Message</div>
                <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from the contact form on greenladderqatar.com</p>
            </div>
          </div>
        </body>
        </html>
      `,
            text: `
New Contact Form Submission
===========================

Name: ${name}
Email: ${email}
Phone: ${phone}
${service ? `Service: ${service}` : ''}

Message:
${message}

---
Sent from Green Ladder Qatar Website
      `,
        };

        // Auto-reply email to the customer
        const mailOptionsToCustomer = {
            from: `"Green Ladder Qatar" <${process.env.SMTP_USER}>`,
            to: email,
            subject: 'Thank you for contacting Green Ladder Qatar',
            html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #17b457 0%, #0d8a3f 100%); color: white; padding: 30px 20px; border-radius: 8px 8px 0 0; text-align: center; }
            .logo { font-size: 24px; font-weight: bold; margin-bottom: 10px; }
            .content { background: #f9f9f9; padding: 30px 20px; border: 1px solid #ddd; border-top: none; }
            .footer { background: #333; color: #fff; padding: 20px; border-radius: 0 0 8px 8px; text-align: center; }
            .footer a { color: #17b457; text-decoration: none; }
            .cta { display: inline-block; background: #17b457; color: white; padding: 12px 30px; border-radius: 6px; text-decoration: none; margin: 10px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">🏗️ Green Ladder Qatar</div>
              <p style="margin: 0; opacity: 0.9;">Specialized Contracting Solutions</p>
            </div>
            <div class="content">
              <h2 style="color: #17b457; margin-top: 0;">Thank You for Reaching Out!</h2>
              <p>Dear ${name},</p>
              <p>Thank you for contacting Green Ladder Qatar. We have received your inquiry and our team will review it promptly.</p>
              <p>We typically respond within <strong>24 business hours</strong>. If your matter is urgent, please feel free to reach us directly:</p>
              <p>
                📞 <strong>Phone:</strong> +974 7774 2921<br>
                📧 <strong>Email:</strong> info@greenladderqatar.com
              </p>
              <p style="text-align: center;">
                <a href="https://wa.me/97477742921?text=Hi, I'm following up on my inquiry." class="cta">Chat on WhatsApp</a>
              </p>
              <p>We look forward to serving you!</p>
              <p>Best regards,<br><strong>Green Ladder Qatar Team</strong></p>
            </div>
            <div class="footer">
              <p style="margin: 0 0 10px 0;"><a href="https://greenladderqatar.com">www.greenladderqatar.com</a></p>
              <p style="margin: 0; font-size: 12px; opacity: 0.7;">Doha, Qatar</p>
            </div>
          </div>
        </body>
        </html>
      `,
            text: `
Dear ${name},

Thank you for contacting Green Ladder Qatar. We have received your inquiry and our team will review it promptly.

We typically respond within 24 business hours. If your matter is urgent, please feel free to reach us directly:

Phone: +974 7774 2921
Email: info@greenladderqatar.com
WhatsApp: https://wa.me/97477742921

We look forward to serving you!

Best regards,
Green Ladder Qatar Team

www.greenladderqatar.com
      `,
        };

        // Send both emails
        await transporter.sendMail(mailOptionsToCompany);
        await transporter.sendMail(mailOptionsToCustomer);

        return NextResponse.json(
            { success: true, message: 'Email sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email. Please try again later.' },
            { status: 500 }
        );
    }
}

