const { GMAIL_HOST, GMAIL_ID, GMAIL_PASS } = require('@/env');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: GMAIL_HOST,
  secure: true,
  auth: {
    user: GMAIL_ID,
    pass:GMAIL_PASS
  }
});



module.exports= transporter