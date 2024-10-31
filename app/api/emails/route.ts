import { fillConfirmationEmailTemplateHtml, fillConfirmationEmailTemplateText, fillInquiryEmailTemplateText } from "@/lib/email.utils";
import nodemailer from "nodemailer";
import { MailOptions } from "nodemailer/lib/sendmail-transport";

const { MAIL_HOST, MAIL_PORT, MAIL_USER, MAIL_PASS } = process.env;

export async function POST(req: Request) {
    const { fullName, email, message } = await req.json()

    const confirmationText = fillConfirmationEmailTemplateText(fullName)
    const confirmationHtml = fillConfirmationEmailTemplateHtml(fullName)
    const inquiryText = fillInquiryEmailTemplateText(fullName, email, message)

    const confirmationMailOptions: MailOptions = {
        from: `no-reply <${MAIL_USER}>`,
        to: email,
        subject: "nSquare.dev: Inquiry Received",
        text: confirmationText,
        attachments: [
            {
                filename: 'LinkedInLogo.png',
                path: 'public/images/LinkedInLogo.png',
                cid: 'LinkedInLogo' //my mistake was putting "cid:logo@cid" here! 
            },
            {
                filename: 'GitHubLogo.png',
                path: 'public/images/GitHubLogo.png',
                cid: 'GitHubLogo' //my mistake was putting "cid:logo@cid" here! 
            },
        ],
        html: confirmationHtml
    };

    const inquiryMailOptions: MailOptions = {
        from: `no-reply <${MAIL_USER}>`,
        to: 'nguyen.nguyen@nsquare.dev',
        subject: `Important: nSquare.dev Inquiry Received from ${fullName}`,
        text: inquiryText,
    };

    const transport = nodemailer.createTransport({
        host: MAIL_HOST,
        port: Number(MAIL_PORT),
        secure: true,
        auth: {
            user: MAIL_USER,
            pass: MAIL_PASS
        },
    });

    const transportVerified = await transport.verify()

    if (transportVerified) {
        const confirmationMailResult = transport.sendMail(confirmationMailOptions)
        const inquiryMailResult = transport.sendMail(inquiryMailOptions);

        const results = await Promise.all([confirmationMailResult, inquiryMailResult])

        if (results) {
            console.log('All emails sent successfully');
            results.forEach(result => {
                console.log(`Message to ${result.envelope.to} sent: ${result.messageId}`);
            });
            return Response.json({ message: `Your inquiry was sent. You will receive a confirmation email shortly at ${email}` });
        } else {
            return Response.json({
                message: 'Failed to send one or more emails'
            }, { status: 500 })
        }
    } else {
        return Response.json({ message: "Server Error" }, { status: 500 })
    }

}
