import React from "react";
import MainContactForm from "./MainContactForm";

function MainContact(){
    return(
        <section className="main-contact">
            <div className="main-contact-text">
                <h1>Meteen contact opnemen</h1>
                <p>Laat hier je gegevens achter en dan neem ik zo snel mogelijk contact met je op.</p>
            </div>
            <div className="main-contact-form">
                <MainContactForm />
            </div>
        </section>
    )
}

export default MainContact;