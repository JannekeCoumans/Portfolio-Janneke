import React from "react";
import Nav from "./Container/Nav";
import Main from "./Container/Main";
import Footer from "./Container/Footer";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from "./ScrollToTop";

import OverMij from "./Container/Components/OverMij";
import Portfolio from "./Container/Components/Portfolio";
import Contact from "./Container/Components/Contact";
import PortfolioItem from "./Container/Components/Portfolio/PortfolioItem";

function Container(){
    return(
        <Router>
            <div className="container">
                <ScrollToTop />
                <Nav />
                <Switch>
                    <Route path="/" exact component={Main} />
                    <Route path="/OverMij" exact component={OverMij} />
                    <Route path="/Portfolio" component={Portfolio} />
                    <Route path="/Contact" component={Contact} />
                    <Route path="/portfolio-items/:afkorting" component={PortfolioItem} />
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}

export default Container;