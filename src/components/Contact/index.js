import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {

    //add the hook to manage form data
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
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
        console.log('errorMessage', errorMessage);

        //setFormState({...formState, [e.target.name]: e.target.value })
    }
    //console.log(formState);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);

        //document.getElementById('submit-form')
    }

    return (
        <section>
            <h1 id='contact'>My Contact Details</h1>
            <p className='center'>reza.1997.mah@gmail.com</p>
            <h2>Or Send Me a Message..</h2>
            <form id='contact-form' onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
            </div>
            <div>
                <label htmlFor="email">Email address:</label>
                <input type="email" defaultValue={email} onBlur={handleChange} name="email" />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea defaultValue={message} onBlur={handleChange} name="message" rows="5"  />
            </div>
            {errorMessage && (
            <div>
                <p className="error-text">{errorMessage}</p>
            </div>
            )}
            <button id='submit-form' type='submit'>Submit</button>
            </form>
        </section>
    );
}

export default Contact;