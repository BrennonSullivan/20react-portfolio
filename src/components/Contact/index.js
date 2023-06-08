import React, { useState } from 'react';
import { validateEmail } from '../../utils/helper';
import emailjs from 'emailjs-com';

function sendEmail() {
    emailjs.send(
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
    
                if(!isValid) {
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
        setFormState({...formState, [e.target.name]: e.target.value })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        sendEmail();
      }
      

return (
    <section class="justify-content-center" id="contact-section">
        <h1 data-testid='h1tag' className="contact">contact: Brennon Sullivan</h1>
        <hr></hr>
        <form className="justify-content-center" id="contact-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">name:</label>
                <input class="form-control" type="text" name="name"  defaultValue={name} onBlur={handleChange}/>
            </div>
            <div >
                <label htmlFor="email">email:</label>
                <input class="form-control" type="email"  name="email" defaultValue={email} onBlur={handleChange} />
            </div>
            <div>
                <label htmlFor="message">message:</label>
                <textarea class="form-control" name="message" defaultValue={message} onBlur={handleChange} rows="7" />
            </div> 
            {errorMessage && (
            <div>
                <p className="error-text">{errorMessage}</p>
            </div>
            )}

            <div>
            <button data-testid='button' class="btn btn-outline-dark mt-4" type="submit" onSubmit={handleSubmit}>Submit</button>
            </div>
        </form>
    </section>
    );
}
    
export default ContactForm;