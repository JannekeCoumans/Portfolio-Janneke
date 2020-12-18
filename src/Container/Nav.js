import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Nav(){
    function openNav() {
        document.getElementById("mySidenav").style.width = "100%";
    }
      
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

    window.onscroll = function() {scrollFunction()};
  
    function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("nav").className = 'nav-scrolled';
    } else {
        document.getElementById("nav").className = 'nav';
    }
    }
    return(
        
        <nav className="" id="nav">
            {/******* DESKTOP NAVIGATIE *******/}
            <div className="nav-logo"></div>
            <div className="nav-menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/OverMij">Over Mij</Link></li>
                    <li><Link to="/Portfolio">Portfolio</Link></li>
                    <Link to="/Contact"><button>Contact</button></Link>
                </ul>
            </div>

            {/******* MOBIELE NAVIGATIE *******/}
            <div className="nav-mobile-icon" onClick={openNav}>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <div id="mySidenav" class="sidenav">
                <FontAwesomeIcon icon={faTimes} onClick={closeNav} className="close-btn"/>
                <div className="nav-logo"></div>
                <ul>
                    <li onClick={closeNav}><Link to="/">Home</Link></li>
                    <li onClick={closeNav}><Link to="/OverMij">Over Mij</Link></li>
                    <li onClick={closeNav}><Link to="/Portfolio">Portfolio</Link></li>
                    <li onClick={closeNav}><Link to="/Contact">Contact</Link></li>
                </ul>
            </div>
        </nav>

    )}

export default Nav;