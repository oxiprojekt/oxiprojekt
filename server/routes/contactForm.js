const express = require('express');
const dotenv = require('dotenv');
const { Resend } = require('resend');

dotenv.config();

const router = express.Router();

const resend = new Resend(process.env.RESEND_API_KEY);

router.post('/', async (req, res) => {
  const { name, email, message, queryType } = req.body;

  try {
    // 1. Send email to yourself
    const { data: internalData, error: internalError } = await resend.emails.send({
      from: 'OxiProjekt <info@oxiprojekt.com>',
      to: 'info@oxiprojekt.com',
      reply_to: [`${name} <${email}>`],
      subject: `${name} ${queryType}`,
      //text: `${message}\n\nName: ${name}\nEmail: ${email}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 16px; background-color: #f9f9f9; border-radius: 8px;">
          <h2><span style="color: #f43f5e;">OxiProjekt</span> Got a New Message!</h2>
          <blockquote style="background: #fff; padding: 12px; border-left: 4px solid #3b82f6; color: #333; font-style: italic;">
            ${message}
          </blockquote>
          <p><strong>\n\nName:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        </div>
      `
    });

    if (internalError) {
      console.error("Resend internal error:", internalError);
      return res.status(500).json({ success: false, message: 'Failed to send internal email.' });
    }

    // 2. Send acknowledgment email to user
    const { data: userData, error: userError } = await resend.emails.send({
      from: 'OxiProjekt <info@oxiprojekt.com>',
      to: email,
      subject: 'Thanks for contacting OxiProjekt!',
      html: `
        <div style="background-color: #e0f2fe; padding: 24px; font-family: Arial, sans-serif; border-radius: 8px;">
          <h2 style="color: #f43f5e; text-align: center;">OxiProjekt</h2>
          <p style="color: #111; font-size: 16px;">Hi ${name},</p>
          <p style="color: #111; font-size: 16px;">
            Thanks for reaching out to <span style="color: #f43f5e;">me</span>. I've received your message and will get back to you shortly.
          </p>
          <p style="background: #fff; padding: 12px; border-left: 4px solid #f43f5e; font-style: italic; color: #444;">
            "${message}"
          </p>
          <p style="color: #111; font-size: 16px;">Best regards,<br/><span style="color: #f43f5e; font-weight: bold; font-size: 14px;">OxiProjekt</span></p>
          <p style="color: #111; font-size: 12px;">
            \n\nIf you did not contact, please accept our polite request to ignore this email.
          </p>
          </div>
      `
    });

    if (userError) {
      console.error("Resend user acknowledgment error:", userError);
      // Don’t return error here – since your main message still went through
    }

    return res.status(200).json({ success: true, message: 'Your message has been sent successfully!' });

  } catch (err) {
    console.error("Unexpected error:", err);
    return res.status(500).json({ success: false, message: 'Something went wrong. Please try again later.' });
  }
});


module.exports = router;
