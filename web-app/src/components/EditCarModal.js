import React, { Component, Fragment } from 'react';
import { createPortal } from 'react-dom';
import AddCarForm from './AddCarForm';
import * as carAPI from '../API/CarAPI';

const ModalTrigger = ({onOpen}) => <button className="btn btn-primary" onClick={onOpen}>Edit</button>;

const ModalContent = ({onClose,saveCar, car}) => {
    return createPortal(
        <aside className="cover">
            <div className="modal">
                <div className="modal__header">
                    <h3 className="title">Edit car</h3>
                    <button className="modal__close circle circle-add-car circle-white" aria-label="Close Modal" onClick={onClose}>
                        <i className="fa fa-times"></i>
                    </button>
                </div>
                <div className="modal__body">
                    <AddCarForm saveCar={saveCar} car={car} />
                </div>
            </div>
        </aside>,
        document.body
    );
};

export default class EditCarModal extends Component {
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

    saveCar = (car) =>{
        carAPI.editCar(car).then(res =>{
            if(res.status===200){
                this.props.getCars();
                this.onClose();
            }}
        )
    };

    render() {
        return (
            <Fragment>
                <ModalTrigger onOpen={this.onOpen} />
                {this.state.isOpen&&(
                <ModalContent onClose={this.onClose} saveCar={this.saveCar} car={this.props.car} getCars={this.props.getCars} />) }
            </Fragment>
        );
    };
}