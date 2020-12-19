import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cards from '../../Cards/Cards';
import './Shoots.css';
import Sho1 from '../../../Assets/Covers/Shoot/battlefield-1.jpg';
import Sho2 from '../../../Assets/Covers/Shoot/battlefield-hardline.jpg';
import Sho3 from '../../../Assets/Covers/Shoot/battlefield-v.jpg';
import Sho4 from '../../../Assets/Covers/Shoot/bioshock-collection.jpg';
import Sho5 from '../../../Assets/Covers/Shoot/black-ops-4.jpg';
import Sho6 from '../../../Assets/Covers/Shoot/borderlands-3.jpg';
import Sho7 from '../../../Assets/Covers/Shoot/bt1-y-titanfall-2.jpg';
import Sho8 from '../../../Assets/Covers/Shoot/cod-ww2.jpg';
import Sho9 from '../../../Assets/Covers/Shoot/fallout-4.jpg';
import Sho10 from '../../../Assets/Covers/Shoot/modern-warfare.jpg';




class Adventure extends Component {

    render() {
        return (

            <div className="o-container-cards">
                <Cards title = {"Battlefield 1"} price = {"$29.900"} image = {Sho1}/>
                <Cards title = {"Battlefield: Hardline"} price = {"$34.900"} image = {Sho2}/>
                <Cards title = {"Battlefield V"} price = {"$89.900"} image = {Sho3}/>
                <Cards title = {"Bioshock: Collection"} price = {"$49.900"} image = {Sho4}/>
                <Cards title = {"Call of Dutty: Black Ops 4"} price = {"$49.900"} image = {Sho5}/>
                <Cards title = {"Boorderlands 3"} price = {"$99.900"} image = {Sho6}/>
                <Cards title = {"Battlefield 1 y TitanFall 2"} price = {"$64.900"} image = {Sho7}/>
                <Cards title = {"Call of Dutty: World War 2"} price = {"$74.900"} image = {Sho8}/>
                <Cards title = {"Fallout 4"} price = {"$59.900"} image = {Sho9}/>
                <Cards title = {"Call of Dutty: Modern Warfare"} price = {"$119.900"} image = {Sho10}/>
            </div>





        );
    }



}

export default Adventure;