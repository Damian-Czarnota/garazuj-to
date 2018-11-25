/**
 * Created by Damian.Czarnota on 2018-10-17.
 */

import React, { Component } from 'react';
import AddCarForm from '../components/AddCarForm';
import * as currentUserAPI from '../API/Me';
import Grid from "../components/Grid";
import { Link } from 'react-router-dom';

export default class UserCars extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            cars: [],
            addPanelVisible: false
        };
        this.config = [
            { key: 'mark', title: 'Mark', type: 'text' },
            { key: 'model', title: 'Model', type: 'number' },
            { key: 'imgSrc', title: 'Image', type: 'image' }
        ];
        this.data = [
            {
                'mark': 'Mazda',
                'model': '6',
                'imgSrc': ''
            }
        ];
        this.cars = [];
        this.getCars = this.getCars.bind(this);
    }

    saveCar = (car) => {
        currentUserAPI.addCar(car).then(res => {
            this.getCars();
        })
    };

    toggleAddCar = () => {
        this.setState({ addPanelVisible: !this.state.addPanelVisible });
    };

    deleteCar = (index) => {
        this.cars.splice(index, 1);
    };

    getCars = () => {
        currentUserAPI.getCars().then(res => {
            console.log(res);
        })
    };

    render() {
        return (
            <div className="user-cars_panel">
                <div className="header">
                    <h2 className="header__title">Cars panel</h2>
                </div>
                <div className="content">
                    <div className="section">
                        <div className="section__header">
                            <span>Your cars</span>
                            <button className="circle circle-add-car circle-primary" onClick={this.toggleAddCar}><i className="fas fa-plus"></i></button>
                        </div>
                        {this.state.addPanelVisible ?
                            <AddCarForm saveCar={this.saveCar} />
                            :
                            null
                        }
                        <div className="section__middle">
                            {this.data.length > 0 && (
                                <Grid config={this.config} data={this.data} deleteCar={this.deleteCar}/>
                            )}
                            {this.data.length === 0 && (
                                <div className="empty-grid">
                                    <i className="fab fa-connectdevelop"></i>
                                    <p>You don't have any car.</p>
                                    <p>Start from adding them in your <Link to="/profile" className="link">profile</Link></p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
