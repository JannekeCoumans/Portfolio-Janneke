import React from "react";
import Contactformulier from "./Contact/Contactformulier";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

function Contact() {
    return(
        <section className="contact-page">
            <div className="contact-header">
                <h1>Contact</h1>
            </div>
            <div className="contact-page-grid">
                <div className="contact-page-formulier">
                    <Contactformulier />
                </div>
                <div className="contact-page-contactgegevens">
                    <h1>Contactgegevens</h1>
                    <FontAwesomeIcon icon={faEnvelope} /> <a href="mailto: info@jannekecoumans.nl">info@jannekecoumans.nl</a><br/><br/>
                    <FontAwesomeIcon icon={faPhoneAlt} /> <a href="tel: 0622887662">06-22887662</a>
                </div>
            </div>
        </section>
    )
}

export default Contact;