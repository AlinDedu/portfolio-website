import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

const senderEmail = process.env.GMAIL_EMAIL;
const gmailAuthPass = process.env.GMAIL_APP_PASSWORD;
const myEmail = process.env.MY_EMAIL;

export async function POST(req, res) {
	const { email, subject, message } = await req.json();
	console.log(email, subject, message);

	const html = `
	<html>
		<body>
			<p>Sender Email: ${email}</p>
			<p>Message: ${message}</p>
		</body>
	</html>
	`;

	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: senderEmail,
			pass: gmailAuthPass,
		},
	});

	const mailOptions = {
		from: senderEmail,
		to: myEmail,
		subject: subject,
		html: html,
	};

	try {
		const info = await transporter.sendMail(mailOptions);
		console.log(`Email received from ${email}`);
		console.log(`Info Response: ${info.response}`);

		return NextResponse.json({ message: 'Email sent successfully!' });
	} catch (error) {
		console.error(error);
		return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
	}
}
