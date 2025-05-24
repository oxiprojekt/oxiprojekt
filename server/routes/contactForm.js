const express = require('express');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from the .env file

const router = express.Router();

// Create Nodemailer transporter using SMTP settings from .env
const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true, // Use true for port 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Async function to send the email
const sendEmail = async ({ name, email, message, queryType }) => {
  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.SMTP_USER,
    subject: `${name} ${queryType}`,
    text: `You have received a new message:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}\nQuery Type: ${queryType}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email sent from ${email}`);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

// POST route to receive form data
router.post('/', (req, res) => {
  const { name, email, message, queryType } = req.body;

  // Respond to the user immediately
  res.status(200).json({ message: 'Form received. We will contact you shortly!' });

  // Send email in the background
  setImmediate(() => {
    sendEmail({ name, email, message, queryType });
  });
});

module.exports = router;
