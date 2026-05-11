// Nodemailer config for Gmail SMTP
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER, // your Gmail address
    pass: process.env.GMAIL_PASS, // app password (not your main password!)
  },
});

module.exports = transporter;

// Send invitation email
// Enhance: logo, app name, color
const APP_NAME = process.env.APP_NAME || 'Boardly';
const LOGO_URL = process.env.APP_LOGO_URL || 'https://waseem-isaac.github.io/boardly/icons/logo.svg';
const MAIN_COLOR = '#e3783e';

async function sendInvitationEmail(to, token) {
  const link = `${process.env.CLIENT_URL}/auth/set-password/${token}`;
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to,
    subject: `You are invited to ${APP_NAME}`,
    text: `You have been invited to ${APP_NAME}. Set your password here: ${link}`,
    html: `
      <div style="background:#fff;padding:32px 0;text-align:center;font-family:sans-serif; margin: 2rem auto; width:420px; border:1px solid #ede5d8">
        <img src="${LOGO_URL}" alt="${APP_NAME} Logo" style="height:50px;margin-bottom:24px;" />
        <h2 style="color:${MAIN_COLOR};margin:0 0 16px 0;">Welcome to ${APP_NAME}</h2>
        <p style="color:#222;font-size:16px;margin:0 0 24px 0;">You have been invited to join <b>${APP_NAME}</b>.</p>
        <a href="${link}" style="display:inline-block;padding:12px 32px;background:${MAIN_COLOR};color:#fff;text-decoration:none;border-radius:4px;font-weight:bold;font-size:16px;">Set Your Password</a>
        <p style="color:#888;font-size:13px;margin-top:32px;">If you did not expect this invitation, you can ignore this email.</p>
      </div>
    `
  };
  await transporter.sendMail(mailOptions);
}

module.exports.sendInvitationEmail = sendInvitationEmail;
