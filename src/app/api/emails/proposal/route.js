import { NextResponse, NextRequest } from "next/server";
import sgMail from '@sendgrid/mail';

export async function POST(request) {
  try {
    const requestBody = await request.text();
    const bodyJSON = JSON.parse(requestBody);
    const { firstName, lastName, email, phone, website, company, challenges, goals } = bodyJSON;

    // Configure SendGrid
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    // Set up email data for the recipient
    const recipientMsg = {
      to: "noreply@adfluentica.com",
      from: "noreply@adfluentica.com",
      subject: "Get a Proposal Confirmation",
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nCompany website: ${website}\nCompany name: ${company}\nChallenges: ${challenges}\nGoals: ${goals}`,
    };

    // Set up email data for the client
    const clientMsg = {
      to: email,
      from: "noreply@adfluentica.com",
      subject: "Get a Proposal Confirmation",
      html: `
        <table width="640" style="border-collapse: collapse; margin: 0 auto; font-style: sans-serif">
  <thead>
    <tr>
      <td>
        <img style="width: 100%" src="https://nextwavead.com/images/email_header.png" />
      </td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 40px">
        <h2 style="text-align: left; font-size: 20px;color:#202020;">Dear ${firstName} ${lastName},</h2>
        <p style="text-align: left; font-size: 16px;color:#202020;">Thank you for requesting a consultation with Next Wave Ad!
</p>
        <p style="text-align: left; font-size: 16px;color:#202020;">We have successfully received your request and will review your details. A team member will  contact you shortly to schedule your consultation and discuss your marketing needs.
</p>
        <p style="text-align: left; font-size: 16px;color:#202020;">If you have any immediate questions or need further assistance, please do not hesitate to reply to this email or contact us at info@nextwavead.com..</p>
        <p style="text-align: left; font-size: 16px;color:#202020;">We look forward to connecting with you!</p>
        <h2 style="text-align: left; font-size: 20px;color:#202020;"> Best regards,<br>Nexoria Team </h2>
      </td>
    </tr>
  </tbody>
  <tfoot >
				<td style="padding: 24px 40px;background: #222222;background-size:cover;font-size: 20px;text-decoration: none;color: #ffffff;text-align: center;">
					Thanks for using <a href="https://nextwavead.com/" style="color: #fff;font-size: 20px;text-decoration: none;color: #EB6418;">Next Wave Ad</a>
				</td>
			  </tfoot>
</table>
      `,
    };

    // Send emails
    await sgMail.send(recipientMsg);
    //await sgMail.send(clientMsg);

    return NextResponse.json({ message: "Success: emails were sent" });
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE", error: error.message });
  }
}
