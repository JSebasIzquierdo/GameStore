import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cards from '../../Cards/Cards';
import './Race.css';
import Rac1 from '../../../Assets/Covers/Race/asseto-corsa.jpg';
import Rac2 from '../../../Assets/Covers/Race/burnout-paradise.jpg';
import Rac3 from '../../../Assets/Covers/Race/crash-bundle.jpg';
import Rac4 from '../../../Assets/Covers/Race/nfs-heat.jpg';
import Rac5 from '../../../Assets/Covers/Race/nfs-payback.jpg';
import Rac6 from '../../../Assets/Covers/Race/project-cars.jpg';
import Rac7 from '../../../Assets/Covers/Race/project-cars1.jpg';
import Rac8 from '../../../Assets/Covers/Race/rocket-league.jpg';
import Rac9 from '../../../Assets/Covers/Race/team-sonic-racing.jpg';
import Rac10 from '../../../Assets/Covers/Race/the-crew-2.jpg';


class Race extends Component {

    render() {
        return (
     
            <div className="o-container-cards">
                <Cards title = {"Asseto Corsa"} price = {"$29.900"} image = {Rac1}/>
                <Cards title = {"Burnout Paradise: Remastered"} price = {"$24.900"} image = {Rac2}/>
                <Cards title = {"Crash Bundle"} price = {"$119.900"} image = {Rac3}/>
                <Cards title = {"Need for Speed: Heat"} price = {"$99.900"} image = {Rac4}/>
                <Cards title = {"Need for Speed: Payback"} price = {"$69.900"} image = {Rac5}/>
                <Cards title = {"Project Cars"} price = {"$39.900"} image = {Rac6}/>
                <Cards title = {"Project Cars 2"} price = {"$39.900"} image = {Rac7}/>
                <Cards title = {"Rocket League"} price = {"$44.900"} image = {Rac8}/>
                <Cards title = {"Team Sonic Racing"} price = {"$54.900"} image = {Rac9}/>
                <Cards title = {"The Crew 2"} price = {"$59.900"} image = {Rac10}/>
            </div>


        );
    }



}

export default Race;