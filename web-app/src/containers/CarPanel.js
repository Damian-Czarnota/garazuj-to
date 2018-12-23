/**
 * Created by Damian.Czarnota on 2018-12-20.
 */


import React, { Component } from 'react';
import * as CarAPI from '../API/CarAPI';
import Comments from '../components/Comments';
import Grid from '../components/Grid';
import * as paymentHistoryAPI from '../API/PaymentHistoryAPI';


export default class CarPanel extends Component{

    constructor(props){
        super(props);
        this.state={
            id:'',
            brand: '',
            model: '',
            type: '',
            mileage: '',
            productionYear: '',
            engineSize: '',
            horsePower: '',
            fuelType: '',
            history:[],
            comments:[]
        }

        this.config=[{key:'date', type:'date'},
            {key:'description', type:'text'},
            {key:'price', type:'number'},
            {key:'action',button:[{type:'delete'}]}
        ];
        this.deleteItem = this.deleteItem.bind(this);
        this.getCarHistory = this.getCarHistory.bind(this);
    }

    componentWillMount(){
        let carID = this.props.match.params.carID;
        CarAPI.getCar(carID).then(res =>{
            this.setState(res);
        })
    }

    deleteItem = (id) => {
        paymentHistoryAPI.deleteItem(id).then(res =>{
            if(res.status===200)
                this.getCarHistory();
        })
    }

    getCarHistory = () => {
        paymentHistoryAPI.getCarHistory(this.state.id).then(res =>{
            this.setState({...this.state, history:res})
        })
    }
    render(){
        let {id,history,brand,model,productionYear,fuelType,type,mileage, engineSize,horsePower, comments} = this.state;
        return(
            <div className="car_panel">
                <div className="header">
                    <h2 className="header__title">Car panel</h2>
                </div>
                <div className="content">
                    <div className="section">
                        <div className="section__header">
                            <span>{brand} {model}</span>
                        </div>
                        <div className="section__middle">
                            {//@TODO:
                                //Component to showing car's photos
                            }
                        </div>
                        <div className="section__header">
                            <span>Technical informations</span>
                        </div>
                        <div className="section__middle">
                            <div className="details_section details_section-two-col">
                                <div className="col">
                                    <div className="form_group form_group-dark">
                                        <label className="">Brand:&nbsp;</label>
                                        <p>{brand}</p>
                                    </div>
                                    <div className="form_group form_group-dark">
                                        <label className="">Model:&nbsp;</label>
                                        <p>{model}</p>
                                    </div>
                                    <div className="form_group form_group-dark">
                                        <label className="">Type:&nbsp;</label>
                                        <p>{type}</p>
                                    </div>
                                    <div className="form_group form_group-dark">
                                        <label className="">Production year:&nbsp;</label>
                                        <p>{productionYear}</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form_group form_group-dark">
                                        <label className="">Engine size:&nbsp;</label>
                                        <p>{engineSize}</p>
                                    </div>
                                    <div className="form_group form_group-dark">
                                        <label className="">Mileage:&nbsp;</label>
                                        <p>{mileage}</p>
                                    </div>
                                    <div className="form_group form_group-dark">
                                        <label className="">Horse power:&nbsp;</label>
                                        <p>{horsePower}</p>
                                    </div>
                                    <div className="form_group form_group-dark">
                                        <label className="">Fuel type:&nbsp;</label>
                                        <p>{fuelType}</p>
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
                                {history&&<Grid config={this.config} data={history} deleteItem={this.deleteItem} noHeaders={true}/>}
                            </div>
                        </div>
                    </div>
                    <Comments comments={comments} label={'car'} hash={id}/>
                </div>
            </div>
        )
    }
}