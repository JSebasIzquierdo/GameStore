import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cards from '../../Cards/Cards';
import './Adventure.css';
import Adv1 from '../../../Assets/Covers/Adventure/a-way-out.jpg';
import Adv2 from '../../../Assets/Covers/Adventure/batman-arkham.jpg';
import Adv3 from '../../../Assets/Covers/Adventure/crash-bandicoot.jpg';
import Adv4 from '../../../Assets/Covers/Adventure/days-gone.jpg';
import Adv5 from '../../../Assets/Covers/Adventure/death-stranding.jpg';
import Adv6 from '../../../Assets/Covers/Adventure/doom.jpg';
import Adv7 from '../../../Assets/Covers/Adventure/far-cry-4.jpg';
import Adv8 from '../../../Assets/Covers/Adventure/just-cause-4.jpg';
import Adv9 from '../../../Assets/Covers/Adventure/marvel-vs-capcom.jpg';
import Adv10 from '../../../Assets/Covers/Adventure/minecraft.jpg';



class Adventure extends Component {

    render() {
        return (

            <div className="o-container-cards">
                <Cards title = {"A way out"} price = {"$59.900"} image = {Adv1}/>
                <Cards title = {"Batman Arkham Night"} price = {"$39.900"} image = {Adv2}/>
                <Cards title = {"Crash Bandicoot"} price = {"$74.900"} image = {Adv3}/>
                <Cards title = {"Days Gone"} price = {"$74.900"} image = {Adv4}/>
                <Cards title = {"Death Stranding"} price = {"$99.900"} image = {Adv5}/>
                <Cards title = {"DOOM"} price = {"$44.900"} image = {Adv6}/>
                <Cards title = {"Far Cry 4"} price = {"$39.900"} image = {Adv7}/>
                <Cards title = {"Just Cause 4"} price = {"$59.900"} image = {Adv8}/>
                <Cards title = {"Marvel vs Capcom"} price = {"$44.900"} image = {Adv9}/>
                <Cards title = {"Minecraft"} price = {"$49.900"} image = {Adv10}/>
            </div>





        );
    }



}

export default Adventure;