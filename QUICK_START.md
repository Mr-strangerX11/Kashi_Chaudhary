# Quick Start Guide

## To run your portfolio with working contact form:

### Option 1: Run with Server (Contact Form Works)

1. **Open Terminal** in the project folder
2. **Start the server:**
   ```bash
   npm start
   ```
3. **Open your browser** and go to:
   ```
   http://localhost:3000
   ```
4. The contact form will now work!

### Option 2: Open HTML Directly (Contact Form Won't Work)

- If you double-click `index.html` and open it in browser (file:// protocol)
- The contact form will NOT work
- You'll see the error message
- This is because the SMTP backend requires a running server

## Troubleshooting

### Error: "Server is not running"
- Make sure you ran `npm start` in the terminal
- Open the site at `http://localhost:3000` (not file://)

### Error: "Port 3000 already in use"
- The server is already running (good!)
- Just open `http://localhost:3000` in your browser

### Error: "Failed to send email"
- Check your `.env` file exists with correct SMTP credentials
- Make sure the Gmail app password is correct
- Check `SMTP_SETUP.md` for detailed setup instructions

## Deploy to Production

To make the contact form work online, deploy to:
- **Vercel** (recommended) - free hosting
- **Heroku** - free tier available
- **Railway** - simple deployment

See `SMTP_SETUP.md` for deployment instructions.

## Current Setup

✅ `.env` file created with Gmail SMTP
✅ Server configured and ready
✅ Contact form integrated

Just run `npm start` and visit `http://localhost:3000`!
