const express = require('express');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from the .env file

const router = express.Router();

// Create Nodemailer transporter using SMTP settings from .env
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true, // Use true for port 465
  auth: {
    user: process.env.SMTP_USER, // Your email username
    pass: process.env.SMTP_PASS, // Your email password
  },
});

// POST route to send the email
router.post('/', async (req, res) => {
  const { name, email, message, queryType } = req.body;

  const mailOptions = {
    from: process.env.SMTP_USER,  // Sender's email (SMTP user)
    to: process.env.SMTP_USER,  // Email address where you'd like to receive the message
    subject: `${name} ${queryType}`,  // Email subject (dynamic)
    text: `You have received a new message:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}\nQuery Type: ${queryType}`,  // Email content with details
  };

  try {
    // Try to send the email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    // Handle error if the email fails to send
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
});

module.exports = router;