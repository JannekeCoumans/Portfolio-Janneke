import React from "react";
import MainContact from "../Main/MainContact";
import FAQ from "./OverMij/FAQ";

function OverMij() {
    return(
        <section className="over-mij">
            <div className="over-mij-header">
                <h1>Over Mij</h1>
            </div>

            <div className="over-mij-intro">
                <div className="over-mij-intro-images">
                    <div className="back-image"></div>
                    <div className="front-image"></div>
                </div>
                <div className="over-mij-intro-text">
                    <h1>Een beetje over mij</h1>
                    <p>Toen ik in 2017 op Codecademy stuitte, bloeide mijn liefde voor coderen en vormgeven weer op. Ik friste mijn HTML- en CSS-kennis weer op en 
                    ging me daarna in JavaScript verdiepen. Ik werkte destijds fulltime in de Horeca, maar daar lag mijn passie niet meer. Dit, wat ik dag in dag uit
                    aan het oefenen was, wilde ik als beroep doen. Het was daarom ook een logische keuze om te stoppen in de Horeca en me te laten omscholen tot 
                    Front-End Developer.<br/><br/>
                    Eerst heb ik een thuisstudie Webdesign gedaan bij NTI, hier leerde ik alle ins and outs van HTML en CSS en heb ik een stabiele 
                    JavaScript-basis opgebouwd. Maar dat was niet genoeg, ik wilde meer leren. Toen ik Winc Academy tegenkwam, was ik meteen om. In maart 2020 
                    begon de zes-weekse opleiding. Het was een fantastische, maar zeer intensieve tijd. Ik heb hier ontzettend veel geleerd. We zijn dieper in 
                    Javascript gedoken en hebben vette projecten gemaakt in React. Naast programmeren heb ik ook geleerd om te léren. Google en Stack Overflow 
                    zijn in een korte tijd mijn hulplijnen geworden en zo leer ik bij elke obstakel weer een hele hoop!<br/><br/>
                    Toen deze zes weken voorbij waren, (wat echt als een half jaar voelde) mochten we ons diploma in ontvangst nemen. Niet veel tijd daarna vond ik een baan bij 
                    Monkey Vision. Dat is een webbureau in Nijmegen, die WordPress-websites ontwikkeld en daarnaast hosting en onderhoud aan klanten aanbiedt. In deze periode 
                    heb ik veel geleerd over alle problemen die op je pad kunnen komen omtrent (e-mail)hosting, domeinregistratie, WordPress-bugfixing en cache-gerelateerde 
                    problemen. Programmeren behoorde helaas niet tot mijn werkzaamheden, dus heb ik uiteindelijk besloten om op zoek te gaan naar een baan waarin ik dit weer kan gaan doen en 
                    verder kan leren!
                    </p>
                </div>
            </div>

            <div className="over-mij-faq">
                <div className="over-mij-faq-text"> 
                    <h1>Waarom vind ik programmeren zo leuk?</h1>
                    <p>Goede vraag! Daar heb ik meerdere antwoorden op:</p>
                </div>
                <div className="over-mij-faq-accordion">
                <FAQ />
                </div>
            </div>
            <MainContact />
        </section>
    )
}

export default OverMij;