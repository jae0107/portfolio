import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import "./contact.scss";

const Contact = () => {
    const [message, setMessage] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setMessage(true);

        emailjs.sendForm('service_xzjiopv', 'template_majg11p', e.target, 'user_RBiQ8bX7Svkz7GLWO4vLd')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form className="contact-form" onSubmit={sendEmail}>
                    <input type="text" name="from_name" placeholder="Your Name"/>
                    <input type="email" name="from_email" placeholder="Your Email"/>
                    <textarea id="textarea" name="message" placeholder="Message"/>
                    <button type="submit" value="Send" >Send</button>
                    {message && <span>Thanks, I'll reply ASAP :) </span>}
                    <div id="copy"></div>
                </form>
            </div>
        </div>
    );
}

export default Contact
