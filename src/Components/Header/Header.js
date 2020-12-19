import React, { Component } from 'react';
import Categories from './Categories/Categories';





class Header extends Component {

    render() {
        return (
            
            <div className="o-header">
                <div className="o-tabs">
                    <Categories />
                </div>

            </div>

        );
    }


}

export default Header;