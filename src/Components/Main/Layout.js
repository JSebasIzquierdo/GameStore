import React, { Component } from 'react';
import Header from '../Header/Header';
import TabPages from '../Header/Categories/TabPages';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './Layout.css';





class Layout extends Component {

    render() {
        return (
            <div>
                <Router>
                <Header />
                <div className = "o-layout-main">
                <TabPages />
                </div>
               
                </Router>
                
            </div>
        );
    }



}

export default Layout;