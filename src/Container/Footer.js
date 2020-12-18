import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt, faAddressCard } from '@fortawesome/free-solid-svg-icons';

function Footer(){
    return(
        <footer>
            <div className="footer-logo"></div>
            <div className="footer-menu">                
                <ul>
                    <p>Menu</p>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/OverMij">Over Mij</Link></li>
                    <li><Link to="/Portfolio">Portfolio</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
            </div>
            <div className="footer-contact">
                <ul>
                    <p>Contact</p>
                    <li><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto: info@jannekecoumans.nl">info@jannekecoumans.nl</a> </li>
                    <li><FontAwesomeIcon icon={faPhoneAlt} /> <a href="tel: 0622887662">06-22887662</a> </li>
                    <li><FontAwesomeIcon icon={faAddressCard} /> <Link to="/Contact">Contactformulier</Link> </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;