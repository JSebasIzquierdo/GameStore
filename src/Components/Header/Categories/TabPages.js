import React, { Component } from 'react';
import Carrousel from '../../Windows/Home/Carrousel/Carrousel';
import Race from '../../Windows/Race/Race';
import Shoots from '../../Windows/Shoots/Shoots';
import Adventure from '../../Windows/Adventure/Adventure';
import Sports from '../../Windows/Sports/Sports';

import { BrowserRouter, Switch, Route, Link, withRouter } from "react-router-dom";


class TabPages extends Component {

    render() {
        return (
          
                    <Switch>
                        <Route exact path="/" component={Carrousel} />
                        <Route path="/carreras" component={Race} />
                        <Route path="/disparos" component={Shoots} />
                        <Route path="/aventura" component={Adventure} />
                        <Route path="/deporte" component={Sports} />
                        
                    </Switch>
                                    
        );

    }
}

export default TabPages;