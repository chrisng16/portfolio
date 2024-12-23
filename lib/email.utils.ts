const fillConfirmationEmailTemplateText = (fullName: string) => {
    return `Hi, ${fullName}. Thank you for your inquiry!\n\nThis email is to confirm that I have received your inquiry. I will get back to you within 1-2 business days.\n\nIn the meantime, if you need any additional questions, feel free to send me another email using the button below or at nguyen.nguyen@nSquare.dev.\n\nI am excited to work with you soon!\n`;
};
const fillInquiryEmailTemplateText = (
    fullName: string,
    email: string,
    message: string,
) => {
    return `You received an inquiry from nSquare.dev\n\nInquiry Sender Details:\nName: ${fullName}\nEmail: ${email}\nMessage: ${message}\n\nRemember to respond ASAP!\n`;
};

const fillConfirmationEmailTemplateHtml = (fullName: string) => {
    return `<!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">

<head>
    <title></title>
    <meta charset="UTF-8" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <!--[if !mso]>-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!--<![endif]-->
    <meta name="x-apple-disable-message-reformatting" content="" />
    <meta content="target-densitydpi=device-dpi" name="viewport" />
    <meta content="true" name="HandheldFriendly" />
    <meta content="width=device-width" name="viewport" />
    <meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no" />

    <style type="text/css">
        @media (max-width:640px) {
            [class~=x_t56] {
                mso-line-height-alt: 0 !important;
                line-height: 0 !important;
                display: none !important
            }

            [class~=x_t59] {
                mso-line-height-alt: 0 !important;
                line-height: 0 !important;
                display: none !important
            }

            [class~=x_t57] {
                padding: 40px !important;
                border-radius: 10px !important;
                width: 398px !important
            }

            [class~=x_t5] {
                width: 398px !important
            }

            [class~=x_t13] {
                width: 398px !important
            }

            [class~=x_t1] {
                width: 398px !important
            }

            [class~=x_t9] {
                width: 398px !important
            }

            [class~=x_t54] {
                width: 358px !important
            }

            [class~=x_t49] {
                text-align: left !important
            }

            [class~=x_t30] {
                display: revert !important
            }

            [class~=x_t32] {
                vertical-align: top !important;
                width: 160px !important
            }

            [class~=x_t21] {
                width: 110.09px !important
            }

            [class~=x_t24] {
                width: 110.09px !important
            }

            [class~=x_t27] {
                width: 110.09px !important
            }

            [class~=x_t48] {
                vertical-align: top !important;
                width: 240px !important
            }

            [class~=x_t42] {
                text-align: right !important
            }

            [class~=x_t35] {
                display: revert !important
            }

            [class~=x_t37] {
                vertical-align: top !important;
                width: 50px !important
            }

            [class~=x_t41] {
                vertical-align: top !important;
                width: 40px !important
            }
        }

        @media (max-width:640px) {

            .t1,
            .t13,
            .t5,
            .t57,
            .t9 {
                width: 398px !important
            }

            .t32,
            .t37,
            .t41,
            .t48 {
                vertical-align: top !important
            }

            .t56,
            .t59 {
                mso-line-height-alt: 0 !important;
                line-height: 0 !important;
                display: none !important
            }

            .t57 {
                padding: 20px !important;
                border-radius: 10px !important
            }

            .t54 {
                width: 358px !important
            }

            .t49 {
                text-align: left !important
            }

            .t30,
            .t35 {
                display: revert !important
            }

            .t32 {
                width: 160px !important
            }

            .t21,
            .t24,
            .t27 {
                width: 110.09px !important
            }

            .t48 {
                width: 240px !important
            }

            .t42 {
                text-align: right !important
            }

            .t37 {
                width: 50px !important
            }

            .t41 {
                width: 40px !important
            }
        }

        table {
            border-collapse: separate;
            table-layout: fixed;
            mso-table-lspace: 0;
            mso-table-rspace: 0
        }

        table td {
            border-collapse: collapse
        }

        .gmail-mobile-forced-width {
            display: none;
            display: none !important
        }

        body,
        h1,
        h2,
        h3,
        p {
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%
        }

        html {
            -webkit-text-size-adjust: none !important
        }

        #innerTable,
        body {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale
        }

        #innerTable img+div {
            display: none;
            display: none !important
        }

        img {
            Margin: 0;
            padding: 0;
            -ms-interpolation-mode: bicubic
        }

        h1,
        h2,
        h3,
        p {
            line-height: inherit;
            overflow-wrap: normal;
            white-space: normal;
            word-break: break-word
        }

        h1,
        h2,
        h3,
        p {
            min-width: 100% !important;
            width: 100% !important;
            max-width: 100% !important;
            display: inline-block !important;
            border: 0;
            padding: 0;
            margin: 0
        }
    </style>

    <!--[if !mso]>-->
    <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&amp;family=Sofia+Sans:wght@700&amp;family=League+Spartan:wght@400;600;700&amp;display=swap"
        rel="stylesheet" type="text/css" />
    <!--<![endif]-->
    <!--[if mso]>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
</head>

<body id=body class=t62 style="min-width:100%;Margin:0px;padding:0px;background-color:#FFFFFF;">
    <div class=t61 style="background-color:#FFFFFF;">
        <table role=presentation width=100% cellpadding=0 cellspacing=0 border=0 align=center>
            <tr>
                <td class=t60 style="font-size:0;line-height:0;mso-line-height-rule:exactly;background-color:#FFFFFF;"
                    valign=top align=center>
                    <!--[if mso]>
<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
<v:fill color=#FFFFFF/>
</v:background>
<![endif]-->
                    <table role=presentation width=100% cellpadding=0 cellspacing=0 border=0 align=center id=innerTable>
                        <tr>
                            <td>
                                <div class=t56
                                    style="mso-line-height-rule:exactly;mso-line-height-alt:50px;line-height:50px;font-size:1px;display:block;">
                                    &nbsp;&nbsp;</div>
                            </td>
                        </tr>
                        <tr>
                            <td align=center>
                                <table class=t58 role=presentation cellpadding=0 cellspacing=0
                                    style="Margin-left:auto;Margin-right:auto;">
                                    <tr>
                                        <!--[if mso]>
<td width=600 class=t57 style="background-color:#FFFFFF;border:1px solid #cccccc;overflow:hidden;padding:44px 42px 32px 42px;border-radius:10px 10px 10px 10px;">
<![endif]-->
                                        <!--[if !mso]>-->
                                        <td class=t57
                                            style="background-color:#FFFFFF;border:1px solid #cccccc;overflow:hidden;width:514px;padding:40px;border-radius:10px;">
                                            <!--<![endif]-->
                                            <table role=presentation width=100% cellpadding=0 cellspacing=0
                                                style="width:100% !important;">
                                                <tr>
                                                    <td align=center>
                                                        <table class=t2 role=presentation cellpadding=0 cellspacing=0
                                                            style="Margin-left:auto;Margin-right:auto;">
                                                            <tr>
                                                                <!--[if mso]>
<td width=514 class=t1>
<![endif]-->
                                                                <!--[if !mso]>-->
                                                                <td class=t1 style="width:514px;">
                                                                    <!--<![endif]-->
                                                                    <a href="https://nSquare.dev" target="_blank">
                                                                        <h1 class=t0
                                                                            style="margin:0;Margin:0;font-family:League Spartan,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:34px;font-weight:600;font-style:normal;font-size:28px;text-decoration:none;text-transform:none;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
                                                                            nSquare.dev</h1>
                                                                    </a>
                                                                    <p>${Date.now()}</p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class=t3
                                                            style="mso-line-height-rule:exactly;mso-line-height-alt:42px;line-height:42px;font-size:1px;display:block;">
                                                            &nbsp;&nbsp;</div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td align=center>
                                                        <table class=t6 role=presentation cellpadding=0 cellspacing=0
                                                            style="Margin-left:auto;Margin-right:auto;">
                                                            <tr>
                                                                <!--[if mso]>
<td width=514 class=t5 style="border-bottom:1px solid #cccccc;padding:0 0 18px 0;">
<![endif]-->
                                                                <!--[if !mso]>-->
                                                                <td class=t5
                                                                    style="border-bottom:1px solid #cccccc;width:514px;padding:0 0 18px 0;">
                                                                    <!--<![endif]-->
                                                                    <h1 class=t4
                                                                        style="margin:0;Margin:0;font-family:Montserrat,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:28px;font-weight:700;font-style:normal;font-size:24px;text-decoration:none;text-transform:none;letter-spacing:-1px;direction:ltr;color:#141414;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">
                                                                        Hi, ${fullName}. Thank you for your inquiry!
                                                                    </h1>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class=t7
                                                            style="mso-line-height-rule:exactly;mso-line-height-alt:18px;line-height:18px;font-size:1px;display:block;">
                                                            &nbsp;&nbsp;</div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td align=center>
                                                        <table class=t10 role=presentation cellpadding=0 cellspacing=0
                                                            style="Margin-left:auto;Margin-right:auto;">
                                                            <tr>
                                                                <!--[if mso]>
<td width=514 class=t9>
<![endif]-->
                                                                <!--[if !mso]>-->
                                                                <td class=t9 style="width:514px;">
                                                                    <!--<![endif]-->
                                                                    <p class=t8
                                                                        style="margin:0;Margin:0;font-family:League Spartan,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:25px;font-weight:400;font-style:normal;font-size:15px;text-decoration:none;text-transform:none;letter-spacing:-0.1px;direction:ltr;color:#141414;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">
                                                                        This email is to confirm that I have received
                                                                        your inquiry. I will get back to you within 1-2
                                                                        business days. In the meantime, if you need any
                                                                        additional questions, feel free to send me
                                                                        another email using the button below or at
                                                                        nguyen.nguyen@nSquare.dev.</p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class=t11
                                                            style="mso-line-height-rule:exactly;mso-line-height-alt:10px;line-height:10px;font-size:1px;display:block;">
                                                            &nbsp;&nbsp;</div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td align=center>
                                                        <table class=t14 role=presentation cellpadding=0 cellspacing=0
                                                            style="Margin-left:auto;Margin-right:auto;">
                                                            <tr>
                                                                <!--[if mso]>
<td width=514 class=t13>
<![endif]-->
                                                                <!--[if !mso]>-->
                                                                <td class=t13 style="width:514px;">
                                                                    <!--<![endif]-->
                                                                    <p class=t12
                                                                        style="margin:0;Margin:0;font-family:League Spartan,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:25px;font-weight:400;font-style:normal;font-size:15px;text-decoration:none;text-transform:none;letter-spacing:-0.1px;direction:ltr;color:#141414;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">
                                                                        I am excited to work with you soon!</p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class=t16
                                                            style="mso-line-height-rule:exactly;mso-line-height-alt:24px;line-height:24px;font-size:1px;display:block;">
                                                            &nbsp;&nbsp;</div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td align=right>
                                                        <table class=t18 role=presentation cellpadding=0 cellspacing=0
                                                            style="Margin-left:auto;">
                                                            <tr>
                                                                <!--[if mso]>
<td class=t17 style="background-color:#080808;overflow:hidden;text-align:center;line-height:34px;mso-line-height-rule:exactly;mso-text-raise:5px;padding:0 23px 0 23px;border-radius:40px 40px 40px 40px;">
<![endif]-->
                                                                <!--[if !mso]>-->
                                                                <td class=t17
                                                                    style="background-color:#080808;overflow:hidden;width:auto;text-align:center;line-height:34px;mso-line-height-rule:exactly;mso-text-raise:5px;padding:0 23px 0 23px;border-radius:40px 40px 40px 40px;">
                                                                    <!--<![endif]-->
                                                                    <a href="mailto:nguyen.nguyen@nSquare.dev">
                                                                        <span class=t15
                                                                            style="display:block;margin:0;Margin:0;font-family:Sofia Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:34px;font-weight:700;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;letter-spacing:-0.2px;direction:ltr;color:#FFFFFF;text-align:center;mso-line-height-rule:exactly;mso-text-raise:5px;">Contact
                                                                            Me</span>
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class=t53
                                                            style="mso-line-height-rule:exactly;mso-line-height-alt:24px;line-height:24px;font-size:1px;display:block;">
                                                            &nbsp;&nbsp;</div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td align=center
                                                        style="border-top:1px solid #cccccc;width:474px;padding-top:24px;">
                                                        <table role=presentation cellpadding=0 cellspacing=0
                                                            style="Margin-left:auto;Margin-right:auto;">
                                                            <tr>
                                                                <!--[if mso]>
<td width=514 class=t54 style="border-top:1px solid #cccccc;padding:20px 20px 12px 20px;">
<![endif]-->
                                                                <!--[if !mso]>-->
                                                                <td class=t54>
                                                                    <!--<![endif]-->
                                                                    <div class=t52 style="width:100%;text-align:left;">
                                                                        <div class=t51 style="display:inline-block;">
                                                                            <table class=t50 role=presentation
                                                                                cellpadding=0 cellspacing=0 align=left
                                                                                valign=top>
                                                                                <tr class=t49>
                                                                                    <td></td>
                                                                                    <td class=t32 width=160 valign=top>
                                                                                        <table role=presentation
                                                                                            width=100% cellpadding=0
                                                                                            cellspacing=0 class=t31
                                                                                            style="width:100%;">
                                                                                            <tr>
                                                                                                <td>
                                                                                                    <table
                                                                                                        role=presentation
                                                                                                        width=100%
                                                                                                        cellpadding=0
                                                                                                        cellspacing=0
                                                                                                        style="width:100% !important;">
                                                                                                        <tr>
                                                                                                            <td
                                                                                                                align=left>
                                                                                                                <table
                                                                                                                    class=t22
                                                                                                                    role=presentation
                                                                                                                    cellpadding=0
                                                                                                                    cellspacing=0
                                                                                                                    style="Margin-right:auto;">
                                                                                                                    <tr>
                                                                                                                        <!--[if mso]>
<td width=116.7032967032967 class=t21 style="background-color:#FFFFFF;overflow:hidden;text-align:left;line-height:24px;mso-line-height-rule:exactly;mso-text-raise:2px;border-radius:10px 10px 10px 10px;">
<![endif]-->
                                                                                                                        <!--[if !mso]>-->
                                                                                                                        <td class=t21
                                                                                                                            style="background-color:#FFFFFF;overflow:hidden;width:116.7px;text-align:left;line-height:24px;mso-line-height-rule:exactly;mso-text-raise:2px;border-radius:10px 10px 10px 10px;">
                                                                                                                            <!--<![endif]-->
                                                                                                                            <a href="https://nSquare.dev"
                                                                                                                                target="_blank">

                                                                                                                                <span
                                                                                                                                    class=t20
                                                                                                                                    style="display:block;margin:0;Margin:0;font-family:League Spartan,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:24px;font-weight:700;font-style:normal;font-size:16px;text-decoration:none;direction:ltr;color:#333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;"><span
                                                                                                                                        class=t19
                                                                                                                                        style="margin:0;Margin:0;mso-line-height-rule:exactly;">nSquare</span>.dev</span>
                                                                                                                            </a>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </table>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td
                                                                                                                align=left>
                                                                                                                <table
                                                                                                                    class=t25
                                                                                                                    role=presentation
                                                                                                                    cellpadding=0
                                                                                                                    cellspacing=0
                                                                                                                    style="Margin-right:auto;">
                                                                                                                    <tr>
                                                                                                                        <!--[if mso]>
<td width=116.7032967032967 class=t24>
<![endif]-->
                                                                                                                        <!--[if !mso]>-->
                                                                                                                        <td class=t24
                                                                                                                            style="width:160px;">
                                                                                                                            <!--<![endif]-->
                                                                                                                            <p class=t23
                                                                                                                                style="margin:0;Margin:0;font-family:League Spartan,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:400;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
                                                                                                                                Los
                                                                                                                                Angeles,
                                                                                                                                CA
                                                                                                                            </p>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </table>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td
                                                                                                                align=left>
                                                                                                                <table
                                                                                                                    class=t28
                                                                                                                    role=presentation
                                                                                                                    cellpadding=0
                                                                                                                    cellspacing=0
                                                                                                                    style="Margin-right:auto;">
                                                                                                                    <tr>
                                                                                                                        <!--[if mso]>
<td width=116.7032967032967 class=t27>
<![endif]-->
                                                                                                                        <!--[if !mso]>-->
                                                                                                                        <td class=t27
                                                                                                                            style="width:160px;">
                                                                                                                            <!--<![endif]-->
                                                                                                                            <a href="tel:408-614-9166"
                                                                                                                                class=t26
                                                                                                                                style="margin:0;Margin:0;font-family:League Spartan,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:400;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
                                                                                                                                408-614-9166
                                                                                                                            </a>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </table>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </table>
                                                                                                </td>
                                                                                                <td class=t30
                                                                                                    style="width:10px;"
                                                                                                    width=10></td>
                                                                                            </tr>
                                                                                        </table>
                                                                                    </td>
                                                                                    <td class=t48 width=333.2967
                                                                                        valign=top>
                                                                                        <table role=presentation
                                                                                            width=100% cellpadding=0
                                                                                            cellspacing=0 class=t47
                                                                                            style="width:100%;">
                                                                                            <tr>
                                                                                                <td class=t46>
                                                                                                    <div
                                                                                                        style="width:100%;text-align:right;">
                                                                                                        <div class=t44
                                                                                                            style="display:inline-block;">
                                                                                                            <table
                                                                                                                class=t43
                                                                                                                role=presentation
                                                                                                                cellpadding=0
                                                                                                                cellspacing=0
                                                                                                                align=right
                                                                                                                valign=top>
                                                                                                                <tr
                                                                                                                    class=t42>
                                                                                                                    <td>
                                                                                                                    </td>
                                                                                                                    <td class=t37
                                                                                                                        width=50
                                                                                                                        valign=top>
                                                                                                                        <table
                                                                                                                            role=presentation
                                                                                                                            width=100%
                                                                                                                            cellpadding=0
                                                                                                                            cellspacing=0
                                                                                                                            class=t36
                                                                                                                            style="width:100%;">
                                                                                                                            <tr>
                                                                                                                                <td
                                                                                                                                    class=t34>
                                                                                                                                    <div
                                                                                                                                        style="font-size:12px;">
                                                                                                                                        <a href="https://www.linkedin.com/in/chrisng16"
                                                                                                                                            target="_blank">

                                                                                                                                            <img class=t33
                                                                                                                                                style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;"
                                                                                                                                                width=40
                                                                                                                                                height=40
                                                                                                                                                alt=""
                                                                                                                                                src="cid:LinkedInLogo" />
                                                                                                                                        </a>
                                                                                                                                    </div>
                                                                                                                                </td>
                                                                                                                                <td class=t35
                                                                                                                                    style="width:10px;"
                                                                                                                                    width=10>
                                                                                                                                </td>
                                                                                                                            </tr>
                                                                                                                        </table>
                                                                                                                    </td>
                                                                                                                    <td class=t41
                                                                                                                        width=40
                                                                                                                        valign=top>
                                                                                                                        <table
                                                                                                                            role=presentation
                                                                                                                            width=100%
                                                                                                                            cellpadding=0
                                                                                                                            cellspacing=0
                                                                                                                            class=t40
                                                                                                                            style="width:100%;">
                                                                                                                            <tr>
                                                                                                                                <td
                                                                                                                                    class=t39>
                                                                                                                                    <div
                                                                                                                                        style="font-size:12px;">
                                                                                                                                        <a href="https://github.com/chrisng16"
                                                                                                                                            target="_blank">
                                                                                                                                            <img class=t38
                                                                                                                                                style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;"
                                                                                                                                                width=40
                                                                                                                                                height=40
                                                                                                                                                alt=""
                                                                                                                                                src="cid:GitHubLogo" />
                                                                                                                                        </a>
                                                                                                                                    </div>
                                                                                                                                </td>
                                                                                                                            </tr>
                                                                                                                        </table>
                                                                                                                    </td>
                                                                                                                    <td>
                                                                                                                    </td>
                                                                                                                </tr>
                                                                                                            </table>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </table>
                                                                                    </td>
                                                                                    <td></td>
                                                                                </tr>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class=t59
                                    style="mso-line-height-rule:exactly;mso-line-height-alt:50px;line-height:50px;font-size:1px;display:block;">
                                    &nbsp;&nbsp;</div>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </div>
    <div class="gmail-mobile-forced-width" style="white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    </div>
</body>

</html>`;
};

export { fillConfirmationEmailTemplateText, fillInquiryEmailTemplateText, fillConfirmationEmailTemplateHtml };
