const fillConfirmationEmailTemplateText = (fullName: string) => {
    return `Hi, ${fullName}. Thank you for your inquiry!\n\nThis email is to confirm that I have received your inquiry. I will get back to you within 1-2 business days.\n\nIn the meantime, if you need any additional questions, feel free to send me another email using the button below or at nguyen.nguyen@nSquare.dev.\n\nI am excited to work with you soon!\n`
}
const fillInquiryEmailTemplateText = (fullName: string, email: string, message: string) => {
    return `You received an inquiry from nSquare.dev\n\nInquiry Sender Details:\nName: ${fullName}\nEmail: ${email}\nMessage: ${message}\n\nRemember to respond ASAP!\n`
}

export { fillConfirmationEmailTemplateText, fillInquiryEmailTemplateText }