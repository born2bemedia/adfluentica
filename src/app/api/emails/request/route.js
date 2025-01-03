import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(request) {
  try {
    const requestBody = await request.text();
    const bodyJSON = JSON.parse(requestBody);
    const {
      yourName,
      email,
      phone,
      activity,
      message,
      urgency,
    } = bodyJSON;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptionsRecipient = {
      from: '"Adfluentica" <noreply@adfluentica.com>',
      to: "noreply@adfluentica.com", //
      subject: "Consultation Request",
      text: `Name: ${yourName}
Email: ${email}
Phone: ${phone}
Activity: ${activity}
message: ${message}
Urgency: ${urgency}`,
    };

    const mailOptionsClient = {
      from: '"Adfluentica" <noreply@adfluentica.com>',
      to: email,
      subject: "Your Consultation Request Has Been Received",
      html: `
            <table width="640" style="border-collapse: collapse; margin: 0 auto; font-style: sans-serif; border-right: 1px solid #222222; border-left: 1px solid #222222;">
            <thead>
                <tr>
                    <th style="background-image: url('https://adfluentica.com/images/letter-top.jpg'); background-size: cover;background-position: center center; background-repeat: no-repeat; height: 117px;"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 50px 40px; font-family: Roboto, sans-serif; color:#0A0A0A;">
                        <h2 style="text-align: left; font-size: 20px;">Dear ${yourName},</h2>
                        <p style="font-size: 16px; line-height: 19px;">Thank you for submitting your request for a consultation with Adfluentica. We appreciate your interest in discussing how we can help your business grow.</p>
                        <p style="font-size: 16px; line-height: 19px;">Our team is currently reviewing your request and will reach out to you soon to discuss your specific messages and how we can address them. Your urgency level has been noted as <span style="color: #008967; font-weight: 600;">${urgency}</span>, and we will prioritise your inquiry accordingly.</p>
                        <p style="font-size: 16px; line-height: 19px;">If you have any immediate questions or additional information to share, please don't hesitate to contact us at <a href="mailto:info@adfluentica.com" style="color: #008967; font-weight: 600;text-decoration: underline;">info@adfluentica.com</a>.</p>
                        <p style="font-size: 16px; line-height: 19px;">Thank you for choosing Adfluentica. We look forward to connecting with you!</p>
                        <p style="font-size: 16px; line-height: 19px; font-weight: 600;">
                            Best regards,
                            <br>
                            The Adfluentica Team
                        </p>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td style="background-color: #222222; font-weight: 600; font-family: Roboto, sans-serif;padding: 24px 0;">
                        <p style="font-size: 20px; line-height: 24px; color: #ffffff; text-align: center;margin: 0;">Thanks for using <a href="https://adfluentica.com/" style="color: #008967; text-decoration: none;">Adfluentica</a></p>
                    </td>
                </tr>
            </tfoot>
        </table>
      `,
    };

    await transporter.sendMail(mailOptionsRecipient);

    await transporter.sendMail(mailOptionsClient);

    return NextResponse.json({ message: "Success: emails were sent" });
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE", error: error.message });
  }
}