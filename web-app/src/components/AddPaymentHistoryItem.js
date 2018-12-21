import React, { Component, Fragment } from 'react';
import { createPortal } from 'react-dom';
import AddCarForm from './AddCarForm';
import * as carAPI from '../API/CarAPI';

const ModalTrigger = ({onOpen}) => <button className="btn btn-primary" onClick={onOpen}>Add payment item</button>;

const ModalContent = ({onClose,savePaymentHistoryItem, car}) => {
    return createPortal(
        <aside className="cover">
            <div className="modal">
                <div className="modal__header">
                    <h3 className="title">Add payment history item for {car.model} {car.brand}</h3>
                    <button className="modal__close circle circle-add-car circle-white" aria-label="Close Modal" onClick={onClose}>
                        <i className="fa fa-times"></i>
                    </button>
                </div>
                <div className="modal__body">

                </div>
            </div>
        </aside>,
        document.body
    );
};

export default class AddPaymentHistoryItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
        this.onOpen = this.onOpen.bind(this);
        this.onClose = this.onClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value});
    }

    onOpen = () => {
        this.setState({ isOpen: true });
    };

    onClose = () => {
        this.setState({ isOpen: false });
    };

    savePaymentHistoryItem= (item) =>{
        //paymentHistoryAPI.addItem(item).then(res =>{
        //    if(res.status===200){
        //        this.props.getPaymentHistory(this.props.car.id);
        //        this.onClose();
        //    }}
        //)
    };

    render() {
        return (
            <Fragment>
                <ModalTrigger onOpen={this.onOpen} />
                {this.state.isOpen&&(
                <ModalContent onClose={this.onClose} savePaymentHistoryItem={this.savePaymentHistoryItem} car={this.props.car} />) }
            </Fragment>
        );
    };
}