/**
 * Created by Damian.Czarnota on 2018-10-17.
 */

import React, { Component } from 'react';
import Grid from "../components/Grid";

export default class UserCars extends Component{

    constructor(props){
        super(props);
        this.state={employees:[]};
        this.config=[
            {key:'title', title:'Title',type:'text'},
            {key:'price', title:'Price', type:'number'},
            {key:'imgSrc', title:'Image', type:'image'}
        ];
        this.data=[
            {
                "title": "aaaa",
                "price": 2222,
                "imgSrc": "//api.emitter.pl/assets/admin.png",
                "category": "food",
                "id": "5bde0f0ccec716f6b759c123"
            },
            {
                "title": "tomato",
                "price": 10,
                "imgSrc": "https://api.emitter.pl/assets/tomato.jpg",
                "category": "food",
                "id": "5bdcb887fa480b0ba5888052"
            },
            {
                "title": "sugar",
                "price": 2,
                "imgSrc": "https://api.emitter.pl/assets/sugar.jpg",
                "category": "food",
                "id": "5bdcb887fa480b0ba5888051"
            },
            {
                "title": "salt",
                "price": 5,
                "imgSrc": "https://api.emitter.pl/assets/salt.jpg",
                "category": "food",
                "id": "5bdcb887fa480b0ba5888050"
            },
            {
                "title": "pumpkin",
                "price": 15,
                "imgSrc": "https://api.emitter.pl/assets/pumpkin.jpg",
                "category": "food",
                "id": "5bdcb887fa480b0ba588804f"
            }
        ]
    }


    render(){
        return(
        <div className="user-cars_panel">
            <div className="header">
                <h2 className="header__title">Cars panel</h2>
            </div>
            <div className="content">
                <div className="section">
                    <div className="section__header">
                        <span>Your cars</span>
                    </div>
                    <div className="section__middle">
                        <Grid config={this.config} data={this.data} />
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
