import { Icon } from "@iconify/react";
import React, { useRef, useState } from "react";
import { Form } from "react-bootstrap";
import emailjs from 'emailjs-com';
import Cookies from "universal-cookie";


function Contact() {
    const cookie = new Cookies().get('isSent');
    const[isSent, setSent] = useState(cookie ? true : false);
    const form = useRef();

    const setNewCookie = () => {
        new Cookies().set('isSent', true, {path: '/', expires: new Date(Date.now() + 2.592e+9)});
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_id', 'template_id', form.current, 'user_id')
        .then((result) => {
            console.log(result.text);
            setNewCookie();
            window.location.reload();
        }, (err) => {
            console.error(err.text);
        })
    }

    return(
        <div className = "contact-wrapper">
            <div className = "contact-box1">
                <p><span className = "contact-box1-span">reach<br /></span>me ...</p>
            </div>
            <div className = "contact-box2">
                {isSent ? 
                <div className = "contact-box2-div">
                    <p>Thank you for contacting me!</p>
                    <p>I will reply as soon as possible!</p>
                </div>
                :
                <Form className = "contact-box2-form" ref = {form} onSubmit = {sendEmail}>
                    <Form.Group className = "contact-box2-form-group">
                        <input className = "contact-box2-form-input a" type = "text" placeholder = "First Name" name = "fname" required />
                        <input className = "contact-box2-form-input b" type = "text" placeholder = "Last Name" name = "lname" required />
                        <input className = "contact-box2-form-input c" type = "email" placeholder = "Email" name = "email_address" required />
                    </Form.Group>
                    <textarea className = "contact-box2-form-big-input" type = "text" placeholder = "Your Message" name = "message" required />
                    <button type = "submit" className = "contact-box2-form-submit">Send</button>
                    
                </Form>
                }
                
            </div>
            <div className = "contact-box3">
                <a className = "contact-box3-icon" href = "https://github.com/CezarBudeci">
                    <Icon  icon = "akar-icons:github-fill" width = "40" height = "40" />
                </a>
                <a className = "contact-box3-icon" href = "https://www.linkedin.com/in/cezar-budeci-2354311b0">
                    <Icon icon = "akar-icons:linkedin-fill" width = "42" height = "42" />
                </a>
                <a className = "contact-box3-icon" href = "mailto:cezarbudeci@gmail.com">
                    <Icon icon = "clarity:email-solid" width = "50" height = "50" />
                </a>
            </div>
            <div className = "copyright">
                <p>Designed by Anna Kot</p>
                <p>Copyright © 2021 Cezar Budeci</p>
            </div>
        </div>
    );
}

export default Contact;