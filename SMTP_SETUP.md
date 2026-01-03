# SMTP Email Setup Guide

This guide will help you set up SMTP email functionality for your portfolio contact form.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- SMTP provider (Gmail, SendGrid, Mailgun, etc.)

## Step 1: Install Dependencies

Update your `package.json` with the required packages:

```bash
npm install express nodemailer cors dotenv
npm install --save-dev
```

Or run:

```bash
npm install
```

## Step 2: Configure SMTP Credentials

### Option A: Using Gmail (Recommended for beginners)

1. **Enable 2-Factor Authentication**
   - Go to your Google Account (myaccount.google.com)
   - Click "Security" in the left menu
   - Enable "2-Step Verification"

2. **Generate App Password**
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and "Windows Computer"
   - Google will generate a 16-character password
   - Copy this password

3. **Create `.env` file** in the project root:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your-email@gmail.com
   SMTP_PASSWORD=your-16-character-app-password
   PORT=3000
   ```

### Option B: Using SendGrid

1. **Create a SendGrid Account**
   - Sign up at https://sendgrid.com/
   - Create an API key

2. **Create `.env` file**:
   ```
   SMTP_HOST=smtp.sendgrid.net
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=apikey
   SMTP_PASSWORD=your-sendgrid-api-key
   PORT=3000
   ```

### Option C: Using Mailgun

1. **Create a Mailgun Account**
   - Sign up at https://www.mailgun.com/
   - Get your SMTP credentials

2. **Create `.env` file**:
   ```
   SMTP_HOST=smtp.mailgun.org
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=postmaster@your-domain.mailgun.org
   SMTP_PASSWORD=your-mailgun-password
   PORT=3000
   ```

## Step 3: Update package.json

Make sure your `package.json` includes:

```json
{
  "name": "kashi-portfolio",
  "version": "1.0.0",
  "description": "Portfolio with SMTP email",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "npm install -g nodemon && nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.0",
    "nodemailer": "^6.9.0",
    "cors": "^2.8.5",
    "dotenv": "^16.0.0",
    "animejs": "^4.2.2"
  }
}
```

## Step 4: Run the Server

```bash
# Development mode (with auto-restart)
npm install -g nodemon
npm run dev

# Production mode
npm start
```

The server will start on `http://localhost:3000`

## Step 5: Deployment Options

### Deploy to Vercel (Recommended for beginners)

1. **Create `vercel.json`**:
```json
{
  "version": 2,
  "builds": [
    {
      "src": "server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "server.js"
    }
  ]
}
```

2. **Push to GitHub and connect to Vercel**
   - Go to https://vercel.com
   - Import your GitHub repository
   - Add environment variables in Vercel dashboard

### Deploy to Heroku

```bash
# Install Heroku CLI
# Then run:
heroku create your-app-name
heroku config:set SMTP_HOST=smtp.gmail.com
heroku config:set SMTP_PORT=587
heroku config:set SMTP_SECURE=false
heroku config:set SMTP_USER=your-email@gmail.com
heroku config:set SMTP_PASSWORD=your-app-password
git push heroku main
```

### Deploy to Railway

1. Go to https://railway.app
2. Create a new project from GitHub
3. Add environment variables in the dashboard
4. Deploy

## Testing Locally

1. Start the server: `npm start`
2. Open `http://localhost:3000` in your browser
3. Fill out the contact form and submit
4. Check both your email and the sender's email for messages

## Troubleshooting

### "SMTP connection error"
- Check your SMTP credentials
- Make sure 2-factor authentication is enabled for Gmail
- Verify the app password is correct

### "Failed to send email"
- Check network connectivity
- Verify the SMTP server is accessible
- Check SMTP port (usually 587 for TLS or 465 for SSL)

### Gmail shows "Less secure app access"
- Use App Passwords instead (recommended)
- Enable 2-Step Verification first

## Security Best Practices

1. **Never commit `.env` file** - Add to `.gitignore`
2. **Use environment variables** - Don't hardcode credentials
3. **Validate user input** - Server already does this
4. **Use HTTPS in production** - Required for secure data transmission
5. **Rate limiting** - Consider adding in production

## Next Steps

- Add rate limiting to prevent spam
- Add email validation
- Add attachment support
- Add email templating
- Add database to store submissions

For questions or issues, refer to:
- Nodemailer docs: https://nodemailer.com/
- Express docs: https://expressjs.com/
- Your SMTP provider's documentation
