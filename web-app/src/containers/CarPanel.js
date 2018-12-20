/**
 * Created by Damian.Czarnota on 2018-12-20.
 */


import React, { Component } from 'react';
import * as CarAPI from '../API/CarAPI';
import Comments from '../components/Comments';
import Grid from '../components/Grid';

export default class CarPanel extends Component{

    constructor(props){
        super(props);
        this.state={
            car:{}
        }
        this.config=[{key:'date', type:'text'},
            {key:'description', type:'text'},
            {key:'price', type:'number'}
        ];
        this.data=[
            {date:'12/12/2012',description:'Tankowanie na Orlenie',price:'50zł'},
            {date:'02/04/2015',description:'Wymiana oleju',price:'150zł'}
        ];
    }

    componentWillMount(){
        let carID = this.props.match.params.carID;
        CarAPI.getCar(carID).then(res =>{
            this.setState({car:res});
        })
    }
    render(){
        let {car} = this.state;
        return(
            <div className="car_panel">
                <div className="header">
                    <h2 className="header__title">Car panel</h2>
                </div>
                <div className="content">
                    <div className="section">
                        <div className="section__header">
                            <span>{car.brand} {car.model}</span>
                        </div>
                        <div className="section__middle">
                                //@TODO:
                                //Component to showing car's photos
                        </div>
                        <div className="section__header">
                            <span>Technical informations</span>
                        </div>
                        <div className="section__middle">
                            <div className="details_section details_section-two-col">
                                <div className="col">
                                    <div className="form_group form_group-dark">
                                        <label className="">Brand:&nbsp;</label>
                                        <p>{car.brand}</p>
                                    </div>
                                    <div className="form_group form_group-dark">
                                        <label className="">Model:&nbsp;</label>
                                        <p>{car.model}</p>
                                    </div>
                                    <div className="form_group form_group-dark">
                                        <label className="">Type:&nbsp;</label>
                                        <p>{car.type}</p>
                                    </div>
                                    <div className="form_group form_group-dark">
                                        <label className="">Production year:&nbsp;</label>
                                        <p>{car.productionYear}</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form_group form_group-dark">
                                        <label className="">Engine size:&nbsp;</label>
                                        <p>{car.engineSize}</p>
                                    </div>
                                    <div className="form_group form_group-dark">
                                        <label className="">Mileage:&nbsp;</label>
                                        <p>{car.mileage}</p>
                                    </div>
                                    <div className="form_group form_group-dark">
                                        <label className="">Horse power:&nbsp;</label>
                                        <p>{car.horsePower}</p>
                                    </div>
                                    <div className="form_group form_group-dark">
                                        <label className="">Fuel type:&nbsp;</label>
                                        <p>{car.fuelType}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section">
                        <div className="section__header">
                            <span>Payments history</span>
                        </div>
                        <div>
                            <div className="details_section">
                                <Grid config={this.config} data={this.data} noHeaders={true}/>
                            </div>
                        </div>
                    </div>
                    <Comments comments={car.comments} label={'car'} hash={car.id}/>
                </div>
            </div>
        )
    }
}