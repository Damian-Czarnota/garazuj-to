/**
 * Created by Damian.Czarnota on 2018-10-17.
 */

import React, { Component } from 'react';
import AddCarForm from '../components/AddCarForm';
import * as carAPI from '../API/CarAPI';
import Grid from "../components/Grid";
import { Link } from 'react-router-dom';

export default class UserCars extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cars:[],
            addPanelVisible: false
        };
        this.config = [
            { key: 'brand', title: 'Brand', type: 'text' },
            { key: 'model', title: 'Model', type: 'text' },
            { key: 'productionYear', title: 'Year of production', type: 'number' },
            {key:'action', button:[
                {type:'delete'},
                {type:'edit-car'}]},
            {key:'action', button:[
                {type:'payment-history'},
                {type:'show-details', URL:'../car'}]}
        ];
        this.getCars = this.getCars.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    componentDidMount(){
        this.getCars();
    }

    saveCar = (car) => {
        carAPI.addCar(car).then(res => {
            if(res.status===200){
                this.toggleAddCar();
                this.getCars();
            }
        })
    };

    toggleAddCar = () => {
        this.setState({ addPanelVisible: !this.state.addPanelVisible });
    };

    deleteItem = (index) => {
        carAPI.deleteCar(index).then(res =>{
            if(res.status===200)
                this.getCars();
        })
    };

    getCars = () => {
        carAPI.getCars().then(res => {
            this.setState({cars:res})
        })
    };

    render() {
        let {cars} = this.state;
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
                            <AddCarForm saveCar={this.saveCar} getCars={this.getCars} />
                            :
                            null
                        }
                        <div className="section__middle">
                            {cars.length > 0 && (
                                <Grid config={this.config} data={cars} deleteItem={this.deleteItem} getCars={this.getCars}/>
                            )}
                            {cars.length === 0 && (
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
