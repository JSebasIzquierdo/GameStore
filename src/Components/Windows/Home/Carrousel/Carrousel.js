import React, { Component } from 'react';
import Race from "../../Race/Race";
import Shoots from "../../Shoots/Shoots";
import Sports from "../../Sports/Sports";
import Adventure from "../../Adventure/Adventure";


class Carrousel extends Component {

    render() {
        return (

            <div>
                <Race />
                <Shoots />
                <Sports />
                <Adventure />
            </div>





        );
    }


}

export default Carrousel;