import React, { Component } from 'react';
import './Cards.css';

const Cards = (props) => {

    const { title, price, image } = props;
        return (

            
                <div className="o-card">
                    <img src = {image}></img>
                    <div className="o-card-body">
                        <div className="o-card-text">
                            <h4>{title}</h4>
                            <p>
                                {price}
                            </p>
                        </div>
                        <button> Comprar </button>
                    </div>
                </div>
           

        );
    }



export default Cards;