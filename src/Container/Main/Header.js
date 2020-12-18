import React from "react";
import { Link } from "react-router-dom";

function Header(){
    return(
    <header>
        <div className="header-text">
            <h1>Welkom op mijn online portfolio</h1>
            <p>Hier kun je meer informatie vinden over mij, mijn portfolio bekijken en direct contact opnemen!</p>
            <div className="header-text__cta">
                <Link to="/OverMij"><button>Meer info over mij</button></Link>
                <Link to="/Portfolio"><button>Bekijk mijn portfolio</button></Link>
                <Link to="/Contact"><button>Neem contact op</button></Link>
            </div>
        </div>
    </header>
    )
}

export default Header;