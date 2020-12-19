import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cards from '../../Cards/Cards';
import './Sports.css';
import Spo1 from '../../../Assets/Covers/Sports/fifa-20.jpg';
import Spo2 from '../../../Assets/Covers/Sports/madden-20.jpg';
import Spo3 from '../../../Assets/Covers/Sports/mxgp2.jpg';
import Spo4 from '../../../Assets/Covers/Sports/mxgp3.jpg';
import Spo5 from '../../../Assets/Covers/Sports/nba-2k20.jpg';
import Spo6 from '../../../Assets/Covers/Sports/nba-2k-playgrounds.jpg';
import Spo7 from '../../../Assets/Covers/Sports/nhl-20.jpg';
import Spo8 from '../../../Assets/Covers/Sports/pes-2020.jpg';
import Spo9 from '../../../Assets/Covers/Sports/ride-3.jpg';
import Spo10 from '../../../Assets/Covers/Sports/wwe-2k20.jpg';



class Adventure extends Component {

    render() {
        return (

            <div className="o-container-cards">
                <Cards title = {"FIFA 20"} price = {"$84.900"} image = {Spo1}/>
                <Cards title = {"Madden NFL 20"} price = {"$89.900"} image = {Spo2}/>
                <Cards title = {"MXGP2"} price = {"$39.900"} image = {Spo3}/>
                <Cards title = {"MXGP3"} price = {"$34.900"} image = {Spo4}/>
                <Cards title = {"NBA 2K20"} price = {"74.900"} image = {Spo5}/>
                <Cards title = {"NBA Playgrounds 2"} price = {"$34.900"} image = {Spo6}/>
                <Cards title = {"NHL 20"} price = {"$54.900"} image = {Spo7}/>
                <Cards title = {"PES 2020"} price = {"$74.900"} image = {Spo8}/>
                <Cards title = {"RIDE 3"} price = {"$39.900"} image = {Spo9}/>
                <Cards title = {"WWE 2K20"} price = {"$74.900"} image = {Spo10}/>
            </div>





        );
    }



}

export default Adventure;