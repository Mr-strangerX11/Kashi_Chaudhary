const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Configure SMTP Transporter
// Using Gmail SMTP - You can replace with your own SMTP service
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: process.env.SMTP_PORT || 587,
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
    }
});

// Verify SMTP connection
transporter.verify((error, success) => {
    if (error) {
        console.log('SMTP connection error:', error);
    } else {
        console.log('SMTP connection successful');
    }
});

// Email sending endpoint
app.post('/api/send-email', async (req, res) => {
    const { name, email, phone, idea } = req.body;

    // Validate input
    if (!name || !email || !phone || !idea) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        // Email to you (notification)
        const notificationEmail = {
            from: process.env.SMTP_USER,
            to: 'kashichaudhary2002@gmail.com',
            subject: `New Contact Form Submission from ${name}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Message:</strong></p>
                <p>${idea.replace(/\n/g, '<br>')}</p>
            `
        };

        // Auto-reply email to user
        const autoReplyEmail = {
            from: process.env.SMTP_USER,
            to: email,
            subject: 'Thank you for contacting Wolf Alpha Team!',
            html: `
                <h2>Thank you for contacting!</h2>
                <p>Hi there ${name},</p>
                <p>We have received your message and will get back to you shortly.</p>
                <p>You will receive updates about our latest projects and insights.</p>
                <p><strong>Best regards,</strong><br>Wolf Alpha Team</p>
            `
        };

        // Send both emails
        await transporter.sendMail(notificationEmail);
        await transporter.sendMail(autoReplyEmail);

        res.json({ 
            success: true, 
            message: 'Emails sent successfully' 
        });

    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ 
            error: 'Failed to send email',
            details: error.message 
        });
    }
});

// Serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
