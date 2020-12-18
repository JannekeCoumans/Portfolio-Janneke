import React from "react";
import Header from "./Main/Header";
import MainOverMij from "./Main/MainOverMij";
import MainPortfolio from "./Main/MainPortfolio";
import MainContact from "./Main/MainContact";

function Main(){
    return(
        <main>
            <Header />
            <MainOverMij />
            <MainPortfolio />
            <MainContact />
        </main>
)}

export default Main;