import React from "react";
import { Link } from "react-router-dom";
import portfolioData from "./Portfolio/portfolioData";

function Portfolio() {

    // const mystyle = {
    //     color: "white",
    //     backgroundColor: "DodgerBlue",
    //     padding: "10px",
    //     fontFamily: "Arial"
    //   };

    //   <h1 style={mystyle}>Hello Style!</h1>
    const portfolioItem = portfolioData.map(item => {
        
        return  <Link to={`/portfolio-items/${item.afkorting}`}>
                    <div className={`portfolio-item ${item.afkorting}`}>
                    </div>
                </Link>
    })

    return(
        <section className="portfolio">
            <div className="portfolio-header">
                <h1>Portfolio</h1>
            </div>
            <div className="portfolio-intro">
                <h1>Work in progress...</h1>
                <p>Dit blijft groeien! Momenteel ben ik bezig met drie andere projecten, zodra deze af zijn zal ik ze hier plaatsen.</p>
            </div>
            <div className="portfolio-grid">
                {portfolioItem}
            </div>
        </section>
    )
}

export default Portfolio;