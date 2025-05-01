// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');

// const app = express();
// const PORT = 5001;

// app.use(cors());
// app.use(bodyParser.json());

// app.post('/contact', async (req, res) => {
//   const { name, email, message } = req.body;

//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'mondalsrijani03@gmail.com',        // ✅ Your Gmail
//       pass: 'bvsxbyujqtkiqrgf',                  // ✅ Gmail App Password (NOT your login)
//     },
//   });

//   const mailOptions = {
//     from: email,
//     to: 'mondalsrijani03@gmail.com',            // ✅ Receiver (can be same as user)
//     subject: `New message from ${name}`,
//     text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ message: 'Your message has been sent!' });
//   } catch (error) {
//     console.error('Email send error:', error);
//     res.status(500).json({ message: 'Failed to send email', error: error.toString() });
//   }
// });
// app.get('/', (req, res) => {
//     res.send('Backend is running!');
//   });
  
// app.listen(PORT, () => {
//   console.log(`🚀 Server listening at http://localhost:${PORT}`);
// });
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');
require('dotenv').config(); // 🔐

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());

// Rate limiter to prevent spam
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 3,
  message: 'Too many requests, try again later.',
});
app.use('/contact', limiter);

// Optional test route
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Your message has been sent!' });
  } catch (error) {
    console.error('Email send error:', error);
    res.status(500).json({ message: 'Failed to send email', error: error.toString() });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server listening at http://localhost:${PORT}`);
});
