import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email: userEmail, name: userName, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'lozinskiynazar56@gmail.com',
          pass: 'kirv pseq uqsk whpn'
        },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: userEmail,
      subject: 'Subscription Confirmation',
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Subscription Confirmation</title>
          <style>
            body {
              font-family: 'Montserrat', sans-serif;
              background-color: #f4f4f4;
              margin: 0;
              padding: 20px;
              text-align: center;
            }
            .container {
              max-width: 600px;
              margin: auto;
              background-color: #ffffff;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            h1 {
              color: #333333;
            }
            p {
              color: #666666;
              font-size: 16px;
              line-height: 1.5;
            }
            .bold {
              font-weight: bold;
            }
            ul {
              display: flex;
              flex-direction: column;
              row-gap: 20px;
              list-style: none;
            }
            li {
              display: flex;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Message Received</h1>
            <ul>
              <li>
                <p class="bold">Name:</p>
                <p>${userName}</p>
              </li>
              <li>
                <p class="bold">Email:</p>
                <p>${userEmail}</p>
              </li>
              <li>
                <p class="bold">Message:</p>
                <p>${message}</p>
              </li>
            </ul>
          </div>
        </body>
        </html>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Email Sent</title>
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
          <style>
            body {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              margin: 0;
              padding-inline: 4vw;
            }
            .container {
              border-radius: 20px;
              border: 1px solid #1d1d1d;
              display: flex;
              flex-direction: column;
              align-items: center;
              padding: 50px 120px;
              row-gap: 10px;
              text-align: center;
            }
            h1 {
              color: #1d1d1d;
              font-family: 'Montserrat', sans-serif;
              font-size: 40px;
              margin: 0;
              line-height: 45px;
            }
            h3 {
              margin: 0;
              color: #1d1d1d;
              font-family: 'Montserrat', sans-serif;
              font-size: 20px;
            }
            a {
              color: white;
              background-color: #000;
              padding: 10px 20px;
              width: 200px;
              text-decoration: none;
              border-radius: 25px;
              font-family: 'Montserrat', sans-serif;
              font-size: 20px;
              margin-top: 20px;
            }
            @media (max-width: 600px) {
              .container {
                padding: 30px 10px;
                width: 100%;
              }
              h1 {
                font-size: 30px;
              }
              h3 {
                font-size: 18px;
              }
              a {
                padding: 8px 16px;
                width: 80%;
              }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Email Sent!</h1>
            <h3>Check your email!</h3>
            <a href="/">Okay</a>
          </div>
        </body>
        </html>
      `);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error sending email.');
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
