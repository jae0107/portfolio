import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import "./contact.scss";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Link } from 'react-router-dom'

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
                {/*<img src="assets/shake.svg" alt="" />*/}
                <div className="contact-info">
                    <div className="phone">
                        <h2>Call</h2>
                        <a href="tel:+61420603110">0420603110</a>
                    </div>
                    <div className="email">
                        <h2>Email</h2>
                        <a href="mailto:ghjgjh0107@gmail.com">ghjgjh0107@gmail.com</a>
                    </div>
                    <div className="itemContainer">
                        <Link style={{ color: '#16181b' }} to={{ pathname: "https://www.linkedin.com/in/jae-choi-11422a185/" }} target="_blank" >
                            <LinkedInIcon className="icon" />
                        </Link>
                        <Link style={{ color: '#16181b', marginLeft: '30px' }} to={{ pathname: "https://github.com/jae0107" }} target="_blank" >
                            <GitHubIcon className="icon" />
                        </Link>
                        <Link style={{ color: '#16181b', marginLeft: '30px' }} to="/assets/Jae_Resume.docx" target="_blank" download>Resume (CV)</Link>
                    </div>
                    <div className="location">
                        <h2>Location</h2>
                        Gosse International Student Residence<br></br>
                        Room 26, 2 Highgate St<br></br>
                        Fullarton SA 5063<br></br>
                        <a className="btn btn-accent" href="https://www.google.com/maps/place/Gosse+International+Student+Residence/@-34.9572511,138.620861,15z/data=!4m5!3m4!1s0x0:0xa70352ed2ab3e671!8m2!3d-34.9572511!4d138.620861" >Google Map</a>
                    </div>
                </div>
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form className="contact-form" onSubmit={sendEmail}>
                    <div className="form-group">
                        <label className="sr-only" htmlFor="fname">Name *</label>
                        <input className="required form-control" id="fname" placeholder="Name&nbsp;*" type="text" name="from_name" />
                    </div>
                    <div className="form-group">
                        <label className="sr-only" htmlFor="contactEmail">Email *</label>
                        <input type="email" name="from_email" className="required form-control h5-email" id="contactEmail" placeholder="Email&nbsp;*"></input>
                    </div>
                    <div className="form-group">
                        <label className="sr-only" htmlFor="comment">Type your message here</label>
                        <textarea className="required form-control" id="textarea" name="message" placeholder="Type your message here&nbsp;*" rows="6"></textarea>
                    </div>
                    <button type="submit" value="Send" >Send</button>
                    {message && <span>Thanks, I'll reply ASAP :) </span>}
                    <div id="copy"></div>
                </form>
            </div>
        </div>
    );
}

export default Contact
