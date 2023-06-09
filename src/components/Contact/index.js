import React, { useState } from 'react';
import { validateEmail } from '../../utils/helper';
import emailjs from 'emailjs-com';

function sendEmail(formState) {
  emailjs
    .send(
      'service_s5y745l',
      'template_8pb3gls',
      {
        to_email: 'brennsullivan2@gmail.com',
        from_name: formState.name,
        from_email: formState.email,
        message: formState.message
      },
      'pHiBioobFEegWnU_C'
    )
    .then(() => {
      console.log('Email sent successfully!');
      // You can add additional code here to handle a successful submission
      window.location.reload(); // Reload the page
    })
    .catch(error => {
      console.error('Error sending email:', error);
      // You can add additional code here to handle an error
    });
}

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const { name, email, message } = formState;

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);

      if (!isValid) {
        setErrorMessage('please enter a valid email');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Check if all fields are filled in
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      setErrorMessage('All fields must be filled in.');
      return; // Exit the function early if there are empty fields
    }

    // Validate email
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email.');
      return; // Exit the function early if email is invalid
    }

    // If all fields are filled in and email is valid, send the email
    sendEmail(formState); // Pass formState as an argument
  }

  return (
    <section class="justify-content-center" id="contact-section">
      <h1 data-testid="h1tag" className="contact">
        Contact: Brennon Sullivan
      </h1>
      <hr></hr>
      <form className="justify-content-center" id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input class="form-control" type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input class="form-control" type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea class="form-control" name="message" defaultValue={message} onBlur={handleChange} rows="7" />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}

        <div>
          <button
            data-testid="button"
            className="btn btn-outline-dark mt-4"
            type="submit" // Changed the button type to 'submit'
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
