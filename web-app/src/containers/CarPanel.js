/**
 * Created by Damian.Czarnota on 2018-12-20.
 */


import React, { Component } from 'react';
import * as CarAPI from '../API/CarAPI';
import Comments from '../components/Comments';
import Grid from '../components/Grid';
import * as paymentHistoryAPI from '../API/PaymentHistoryAPI';
import ImageGallery from 'react-image-gallery';
import UploadPhoto from '../components/UploadPhoto';
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { userInfo: state.userInfo,
            isAdmin: state.isAdmin};
};

class CarPanel extends Component{

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
            comments:[],
            isOwn:false
        };

        this.config=[{key:'date', type:'date'},
            {key:'description', type:'text'},
            {key:'price', type:'number'},
            {key:'action',button:[{type:'delete'}]}
        ];
        this.deleteItem = this.deleteItem.bind(this);
        this.getCarHistory = this.getCarHistory.bind(this);
        this.getCar = this.getCar.bind(this);
    }

    componentWillMount(){
        let carID = this.props.match.params.carID;
        this.getCar(carID);
    }

    getCar = (carID) =>{
        CarAPI.getCar(carID).then(res =>{
            this.setState(res);
            this.props.userInfo.cars.forEach(car =>{
                if(car.id.toString()===carID)
                    this.setState({...this.state,isOwn:true});
            })
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
        let images=[];
        let {id,history,brand,model,productionYear,fuelType,type,mileage, engineSize,horsePower, comments, photos} = this.state;
        if(photos)
            photos.forEach(photo =>{
                    images.push({original:`data:image/png;base64,${photo.data}`})
            });

        return(
            <div className="car_panel">
                <div className="header">
                    <h2 className="header__title">Car panel</h2>
                </div>
                <div className="content">
                    <div className="section">
                        <div className="section__header">
                            <span>{brand} {model}</span>
                            {this.state.isOwn&&(<UploadPhoto id={id} getCar={this.getCar}/>)}
                        </div>
                        <div className="section__middle">
                            {images&&images.length>0&&(
                                <ImageGallery items={images} infinite={true} showFullscreenButton={false} showThumbnails={false} showPlayButton={false} />
                            )}
                            {images&&images.length === 0 && (
                                <div className="empty-grid">
                                    <i className="fab fa-connectdevelop"></i>
                                    <p>Car doesn't have photos.</p>
                                </div>
                            )}
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
                                {history&&<Grid config={this.config} data={history} deleteItem={this.deleteItem} noHeaders={true} isOwn={this.state.isOwn} isAdmin={this.props.isAdmin} />}
                                {history&&history.length === 0 && (
                                    <div className="empty-grid">
                                        <i className="fab fa-connectdevelop"></i>
                                        <p>Car doesn't have payment history.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <Comments comments={comments} label={'car'} hash={id}/>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(CarPanel)