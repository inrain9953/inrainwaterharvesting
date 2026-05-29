import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: true, // true for 465
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD
  }
})

export async function GoogleAdsMail ({ userEmail, userName, phone, message }) {
  try {
    // 1. Mail to user
    await transporter.sendMail({
      from: `"InRain Construction" <${process.env.EMAIL}>`,
      to: userEmail,
      subject: 'Thank You for Contacting InRain Construction',
      html: `
<div style="margin:0;padding:0;background:#f4f7fb;font-family:Arial,sans-serif;">
  
  <table width="100%" cellspacing="0" cellpadding="0" style="background:#f4f7fb;padding:30px 15px;">
    <tr>
      <td align="center">

        <table width="650" cellspacing="0" cellpadding="0" style="background:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);max-width:650px;">

          <!-- Header -->
          <tr>
            <td style="background:#0B5ED7;padding:35px;text-align:center;">
              
              <img 
                src="https://inrainwaterharvesting.com/logo.png"
                alt="InRain Construction"
                style="height:70px;margin-bottom:15px;"
              />

              <h1 style="margin:0;color:#ffffff;font-size:30px;">
                Thank You!
              </h1>

              <p style="margin-top:10px;color:#dce8ff;font-size:16px;">
                We’ve successfully received your enquiry.
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px 35px;color:#333333;line-height:1.8;">

              <h2 style="margin-top:0;color:#0B5ED7;">
                Hello ${userName},
              </h2>

              <p>
                Thank you for contacting
                <strong>InRain® Construction Private Limited</strong>.
              </p>

              <p>
                We appreciate your interest in our 
                <strong>Rainwater Harvesting, Groundwater Recharge, Water Auditing, 
                and Sustainable Water Management Solutions.</strong>
              </p>

              <p>
                Your enquiry has been successfully received by our team. 
                One of our experts will review your requirements and get back to you shortly.
              </p>

              <!-- Info Box -->
              <div style="background:#f2f7ff;border-left:5px solid #0B5ED7;padding:18px;border-radius:8px;margin:25px 0;">
                <strong>What happens next?</strong>

                <ul style="padding-left:20px;margin:12px 0;">
                  <li>Our expert team reviews your enquiry</li>
                  <li>We analyze your project requirements</li>
                  <li>You receive a callback or email shortly</li>
                </ul>
              </div>

              <!-- CTA -->
              <div style="text-align:center;margin:35px 0;">
                <a 
                  href="https://www.inrainwaterharvesting.com"
                  style="
                    background:#0B5ED7;
                    color:#ffffff;
                    text-decoration:none;
                    padding:14px 28px;
                    border-radius:8px;
                    display:inline-block;
                    font-weight:bold;
                    font-size:16px;
                  "
                >
                  Visit Our Website
                </a>
              </div>

              <p>
                If you have any urgent queries, feel free to contact us directly.
              </p>

              <p style="margin-bottom:0;">
                Regards,<br/>
                <strong>Team InRain Construction Pvt. Ltd.</strong>
              </p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f8f9fc;padding:30px;text-align:center;border-top:1px solid #e5e5e5;">

              <h3 style="margin-top:0;color:#0B5ED7;">
                InRain® Construction Pvt. Ltd.
              </h3>

              <p style="margin:8px 0;color:#666;font-size:14px;">
                Water Conservation & Management Company
              </p>

              <p style="margin:8px 0;color:#666;font-size:14px;">
                🌐 www.inrainwaterharvesting.com
              </p>

              <p style="margin:8px 0;color:#666;font-size:14px;">
                📧 sales@inrainwaterharvesting.com
              </p>

              <!-- Social Media Icons -->
              <div style="margin-top:20px;">

                <a href="https://www.facebook.com/inrainconstructionofficial" style="margin:0 8px;">
                  <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" width="30" />
                </a>

                <a href="https://www.instagram.com/inrainconstruction/" style="margin:0 8px;">
                  <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" width="30" />
                </a>

                <a href="https://www.linkedin.com/company/inrainconstruction" style="margin:0 8px;">
                  <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" width="30" />
                </a>

                <a href="https://www.youtube.com/@inrainharvesting" style="margin:0 8px;">
                  <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" width="30" />
                </a>

              </div>

              <p style="margin-top:25px;color:#999;font-size:12px;">
                © ${new Date().getFullYear()} InRain® Construction Pvt. Ltd.
                All Rights Reserved.
              </p>

            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</div>
`
    })

    // 2. Mail to Admin (your company)
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.EMAIL_ADMIN,
      subject: 'New Lead received from inrainwaterharvesting.com by Google Ads',
      html: `
<div style="margin:0;padding:30px 15px;background:#f4f7fb;font-family:Arial,sans-serif;">

  <table width="100%" cellspacing="0" cellpadding="0">
    <tr>
      <td align="center">

        <table 
          width="700" 
          cellspacing="0" 
          cellpadding="0"
          style="
            background:#ffffff;
            border-radius:14px;
            overflow:hidden;
            box-shadow:0 4px 25px rgba(0,0,0,0.08);
            max-width:700px;
          "
        >

          <!-- Header -->
          <tr>
            <td 
              style="
                background:linear-gradient(135deg,#0B5ED7,#084298);
                padding:35px;
                text-align:center;
              "
            >

              <img
                src="https://www.inrainwaterharvesting.com/logo.png"
                alt="InRain Construction"
                style="height:65px;margin-bottom:15px;"
              />

              <h1 
                style="
                  color:#ffffff;
                  margin:0;
                  font-size:28px;
                "
              >
                🚀 New Lead from Google Ads
              </h1>

              <p 
                style="
                  color:#dbe7ff;
                  margin-top:10px;
                  font-size:16px;
                "
              >
                A new lead has been submitted through the Google Ads form.
              </p>

            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:35px;">

              <div
                style="
                  background:#f8fbff;
                  border:1px solid #d7e8ff;
                  border-radius:12px;
                  overflow:hidden;
                "
              >

                <table width="100%" cellpadding="0" cellspacing="0">

                  <tr>
                    <td
                      style="
                        padding:18px 22px;
                        background:#edf5ff;
                        border-bottom:1px solid #d7e8ff;
                        font-size:18px;
                        font-weight:bold;
                        color:#0B5ED7;
                      "
                    >
                      Client Details
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:22px;">

                      <table width="100%" cellpadding="10">

                        <tr>
                          <td width="140">
                            <strong>👤 Name</strong>
                          </td>
                          <td>${userName}</td>
                        </tr>

                        <tr>
                          <td>
                            <strong>📧 Email</strong>
                          </td>
                          <td>
                            <a 
                              href="mailto:${userEmail}"
                              style="
                                color:#0B5ED7;
                                text-decoration:none;
                              "
                            >
                              ${userEmail}
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <strong>📞 Phone</strong>
                          </td>
                          <td>
                            <a
                              href="tel:${phone}"
                              style="
                                color:#0B5ED7;
                                text-decoration:none;
                              "
                            >
                              ${phone}
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td valign="top">
                            <strong>💬 Message</strong>
                          </td>

                          <td>
                            <div
                              style="
                                background:#f9fafb;
                                border-left:4px solid #0B5ED7;
                                padding:15px;
                                border-radius:8px;
                                color:#444;
                                line-height:1.7;
                              "
                            >
                              ${message || 'No message provided'}
                            </div>
                          </td>
                        </tr>

                      </table>

                    </td>
                  </tr>

                </table>

              </div>

              <!-- CTA Buttons -->
              <div 
                style="
                  margin-top:35px;
                  text-align:center;
                "
              >

                <a
                  href="mailto:${userEmail}"
                  style="
                    background:#0B5ED7;
                    color:#ffffff;
                    text-decoration:none;
                    padding:14px 26px;
                    border-radius:8px;
                    font-weight:bold;
                    display:inline-block;
                    margin-right:10px;
                  "
                >
                  Reply to Client
                </a>

                <a
                  href="tel:${phone}"
                  style="
                    background:#198754;
                    color:#ffffff;
                    text-decoration:none;
                    padding:14px 26px;
                    border-radius:8px;
                    font-weight:bold;
                    display:inline-block;
                  "
                >
                  Call Client
                </a>

              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td
              style="
                background:#f8f9fc;
                border-top:1px solid #ececec;
                text-align:center;
                padding:25px;
              "
            >

              <h3 
                style="
                  margin:0;
                  color:#0B5ED7;
                "
              >
                InRain® Construction Pvt. Ltd.
              </h3>

              <p
                style="
                  margin:10px 0 0;
                  color:#666;
                  font-size:14px;
                "
              >
                Water Conservation & Management Company
              </p>

              <p
                style="
                  color:#999;
                  font-size:12px;
                  margin-top:12px;
                "
              >
                This enquiry was submitted from your Google Ads campaign on inrainwaterharvesting.com<br/>
                © ${new Date().getFullYear()} InRain® Construction Pvt. Ltd. All Rights Reserved.<br/>:
                <br/>
                www.inrainwaterharvesting.com
              </p>

            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</div>
`
    })

    return true
  } catch (error) {
    console.error('SMTP Error:', error)
    return false
  }
}
