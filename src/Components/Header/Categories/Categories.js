import React, { Component } from 'react';
import './Categories.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LogoStore from "../../../Assets/logoxevastore.png"



class Categories extends Component {

    render() {
        return (
            <header className="header">
                <a className = "logo"><img src = {LogoStore}></img></a>
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
                    <ul className="menu">
                        <li><a><Link to="/">Inicio</Link></a></li>
                        <li><a><Link to="/disparos">Disparos</Link></a></li>
                        <li><a><Link to="/carreras">Carreras</Link></a></li>
                        <li><a><Link to="/aventura">Aventura</Link></a></li>
                        <li><a><Link to="/deporte">Deporte</Link></a></li>
                    </ul>
            </header>
        );
    }
}

export default Categories;
