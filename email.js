(function(){
  // Configure EmailJS here. Replace with your actual IDs.
  const EMAILJS_PUBLIC_KEY = 'REPLACE_WITH_EMAILJS_PUBLIC_KEY';
  const EMAILJS_SERVICE_ID_OWNER = 'REPLACE_WITH_SERVICE_ID_OWNER';
  const EMAILJS_TEMPLATE_ID_OWNER = 'REPLACE_WITH_TEMPLATE_ID_OWNER';
  const EMAILJS_TEMPLATE_ID_AUTOREPLY = 'REPLACE_WITH_TEMPLATE_ID_AUTOREPLY';

  // Guard for SDK availability
  function ensureEmailJs(){
    if (typeof emailjs === 'undefined') {
      throw new Error('EmailJS SDK not loaded. Ensure @emailjs/browser script is included.');
    }
  }

  // Initialize EmailJS once DOM is ready
  document.addEventListener('DOMContentLoaded', function(){
    try {
      ensureEmailJs();
      if (!EMAILJS_PUBLIC_KEY || EMAILJS_PUBLIC_KEY.startsWith('REPLACE_')) {
        console.warn('EmailJS public key is not configured. Update email.js constants.');
      }
      emailjs.init(EMAILJS_PUBLIC_KEY);
    } catch (e) {
      console.error('EmailJS initialization failed:', e);
    }
  });

  // Expose a helper to send both emails
  window.sendContactEmails = async function(name, email, phone, idea){
    ensureEmailJs();

    const ownerParams = {
      from_name: name,
      from_email: email,
      phone: phone,
      message: idea
    };

    const autoReplyParams = {
      to_name: name,
      to_email: email,
      message: 'Thank you for reaching out! We have received your message and will get back to you shortly.'
    };

    // Send notification to site owner
    await emailjs.send(EMAILJS_SERVICE_ID_OWNER, EMAILJS_TEMPLATE_ID_OWNER, ownerParams);
    // Send auto-reply to user
    await emailjs.send(EMAILJS_SERVICE_ID_OWNER, EMAILJS_TEMPLATE_ID_AUTOREPLY, autoReplyParams);
  };
})();
