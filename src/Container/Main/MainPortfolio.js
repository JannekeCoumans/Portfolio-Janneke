import React from "react";
import { Link } from "react-router-dom";

function MainPortfolio(){
    return(
        <section className="main-portfolio">
            <h1>Portfolio</h1>
            <p>Over de jaren heen heb ik heel wat gemaakt. Dit is een greep uit mijn werk.</p>
            <div className="main-portfolio-grid">
                <Link to="/portfolio-items/studentdashboard">
                    <div className="portfolio-item studentdashboard">
                        <div className="portfolio-item-info">
                            <h1>Student Dashboard</h1>
                        </div>
                    </div>
                </Link>
                <Link to="/portfolio-items/playlist">
                    <div className="portfolio-item playlist">
                        <div className="portfolio-item-info">
                            <h1>React Playlist</h1>
                        </div>
                    </div>
                </Link>
                <Link to="/portfolio-items/todolist">
                    <div className="portfolio-item todolist">
                        <div className="portfolio-item-info">
                            <h1>To do List</h1>
                        </div>
                    </div>
                </Link>
            </div>
            <Link to="/Portfolio"><button>Bekijk meer</button></Link>
        </section>
    )
}

export default MainPortfolio;