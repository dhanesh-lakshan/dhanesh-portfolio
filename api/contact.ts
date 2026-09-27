// Vercel Serverless Function: POST /api/contact
// Securely routes messages to dhanesh.lakshan.it@gmail.com without exposing API keys

export default async function handler(req: any, res: any) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed. Use POST.' });
  }

  try {
    const { name, email, subject, message, hp } = req.body || {};

    // 1. Anti-spam honeypot check
    if (hp) {
      return res.status(200).json({ success: true, message: 'Message delivered.' });
    }

    // 2. Validation
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return res.status(400).json({ message: 'Name is required.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
      return res.status(400).json({ message: 'A valid email address is required.' });
    }

    if (!subject || typeof subject !== 'string' || subject.trim().length < 3) {
      return res.status(400).json({ message: 'Subject must be at least 3 characters.' });
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return res.status(400).json({ message: 'Message must be at least 10 characters.' });
    }

    if (message.length > 5000) {
      return res.status(400).json({ message: 'Message is too long (max 5000 characters).' });
    }

    const targetEmail = process.env.CONTACT_EMAIL || 'dhanesh.lakshan.it@gmail.com';
    const resendApiKey = process.env.RESEND_API_KEY;

    // If Resend API key is configured in production environment
    if (resendApiKey) {
      const emailResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Portfolio Contact Form <onboarding@resend.dev>',
          to: [targetEmail],
          reply_to: email.trim(),
          subject: `Portfolio Contact — ${subject.trim()}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
              <h2 style="color: #0b1f3a; margin-top: 0;">New Message from Portfolio Website</h2>
              <p><strong>Name:</strong> ${name.trim()}</p>
              <p><strong>Email:</strong> <a href="mailto:${email.trim()}">${email.trim()}</a></p>
              <p><strong>Subject:</strong> ${subject.trim()}</p>
              <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
              <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
              <h4 style="color: #0b1f3a; margin-bottom: 8px;">Message:</h4>
              <p style="white-space: pre-wrap; background: #f8fafc; padding: 16px; border-radius: 6px; line-height: 1.6;">${message.trim()}</p>
            </div>
          `,
        }),
      });

      if (!emailResponse.ok) {
        const errorData = await emailResponse.json().catch(() => null);
        console.error('Resend delivery error:', errorData);
        return res.status(500).json({
          message: 'Email service error. Please contact directly at dhanesh.lakshan.it@gmail.com',
        });
      }

      return res.status(200).json({ success: true, message: 'Message sent successfully.' });
    }

    // If API key is not yet set in environment (e.g. testing or initial staging), log and return success
    console.log('Local/Staging Contact Submission:', {
      name,
      email,
      subject,
      message,
      targetEmail,
      timestamp: new Date().toISOString(),
    });

    return res.status(200).json({
      success: true,
      message: 'Message received and logged. (Configure RESEND_API_KEY in production to deliver directly).',
    });
  } catch (error: any) {
    console.error('Contact handler error:', error);
    return res.status(500).json({
      message: 'Server error processing contact request. Please use direct email.',
    });
  }
}
