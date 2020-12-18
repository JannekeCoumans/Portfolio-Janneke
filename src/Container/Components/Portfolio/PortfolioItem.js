import React from "react";
import portfolioData from "./portfolioData";
import MainContact from "../../Main/MainContact";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function PortfolioItem({ match }) {

    const clickedItem = match.params.afkorting;
    
    const Item = portfolioData.filter(item => {
        return item.afkorting === clickedItem;
    })


    let vereisten = "";
    let vereistenList = "";

    if (Item[0].vereisten === ""){
        vereisten = "";
    }else {
        vereistenList = Item[0].vereisten.map(item => {
            return <li>{item}</li>
        })

        vereisten = <div className="portfolio-item-vereisten"><h1>Vereisten voor het project:</h1><ul>{vereistenList}</ul></div>
    }
    
    let extraFoto1 = "";
    let extraFoto2 = "";

    if (Item[0].extrafoto1 === ""){
        extraFoto1 = "";
    }else {
        extraFoto1 = <div className={`portfolio-item-extrafoto1 image-${Item[0].afkorting}`}></div>
    }

    if (Item[0].extrafoto2 === ""){
        extraFoto2 = "";
    }else {
        extraFoto2 = <div className={`portfolio-item-extrafoto2 image-${Item[0].afkorting}`}></div>
    }
     
    return (
        <div>
            <div className={`portfolio-item-header header-${Item[0].afkorting}`}>
            </div>
            <div className="portfolio-breadcrumbs">
                <Link to="/Portfolio"> <FontAwesomeIcon icon={faChevronLeft} /> Terug naar Portfolio Items</Link>
            </div>
            <div className="portfolio-item-text">
                <h1>Over de website:</h1>
                <p className="portfolio-item-text-intro">{Item[0].intro}</p>
                <a href={Item[0].link} target="_blank" rel="noreferrer"><button>Bekijk de website</button></a>
                <div className="portfolio-item-images">      
                    {extraFoto1}
                    {extraFoto2}
                </div>
                <h1>Over het project:</h1>
                <p className="portfolio-item-text-toelichting">{Item[0].toelichting}</p>
                {vereisten}
            </div>
            <MainContact />
        </div>
    )
}

export default PortfolioItem;