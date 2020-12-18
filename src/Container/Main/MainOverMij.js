import React from "react";
import { Link } from "react-router-dom";


function MainOverMij(){
    return(
        <section className="main-overmij container">
            <div className="main-overmij-images">
                <div className="back-image"></div>
                <div className="front-image"></div>
            </div>
            <div className="main-overmij-text">
                <h1>Een beetje over mij</h1>
                <p>Toen ik in 2017 op Codecademy stuitte, bloeide mijn liefde voor coderen en vormgeven weer op. Ik friste mijn HTML- en CSS-kennis weer op en 
                ging me daarna in JavaScript verdiepen. Ik werkte destijds fulltime in de Horeca, maar daar lag mijn passie niet meer. Dit, wat ik dag in dag uit
                aan het oefenen was, wilde ik als beroep doen.</p>
                <Link to="/OverMij"><button>Lees verder</button></Link>
            </div>
        </section>
    )
}

export default MainOverMij;