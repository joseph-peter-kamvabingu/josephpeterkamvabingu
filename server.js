const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Set up Nodemailer transport configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'josephpeterkamvabingu@gmail.com',  // Your Gmail address
    pass: '@Wonder265'  // App password (NOT your Google password)
  }
});

// Route to handle form submission
app.post('/submit-form', (req, res) => {
  const { name, email, message } = req.body;

  // Send email using Nodemailer
  transporter.sendMail({
    from: email,
    to: 'josephpeterkamvabingu@gmail.com', // Where the email will be sent
    subject: `Message from ${name}`,
    text: message,
  }, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send('Error sending email');
    }
    res.send('Message sent successfully!');
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
