/**
 * Created by Damian.Czarnota on 2018-11-19.
 */

import React, {Component, Fragment} from 'react';
import * as MechanicAPI from '../API/MechanicAPI';

const ModalTrigger = ({onOpen}) => <button className="circle circle-add-car circle-primary" onClick={onOpen}><i className="fas fa-plus"></i></button>;


export default class AddMechanic extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen:false,
            title:'',
            shortDescription:''
        };
        this.onOpen = this.onOpen.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.addMechanic = this.addMechanic.bind(this);
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


    addMechanic(){
        MechanicAPI.add(this.state).then(res =>{
            if(res.status===200){
                this.props.getMechanics();
                this.onClose();
            }
        })
    }

    render() {
        const { isOpen } = this.state;
        return (
            <Fragment>
                <ModalTrigger onOpen={this.onOpen} />
                {isOpen&&(
                    <aside className="cover">
                        <div className="modal">
                            <div className="modal__header">
                                <h3 className="title">Add mechanic</h3>
                                <button className="modal__close circle circle-add-car circle-white" aria-label="Close Modal" onClick={this.onClose}>
                                    <i className="fa fa-times"></i>
                                </button>
                            </div>
                            <div className="modal__body">
                                <form>
                                    <div className="control_input">
                                        <input name="title" type="text" className="custom_input" style={{width:99+'%',marginBottom:24+'px'}} value={this.state.title} onChange={this.handleChange} required />
                                        <label className="custom_label">Mechanic name</label>
                                    </div>
                                    <div className="control_input">
                                        <textarea maxLength="500" name="shortDescription" type="text" className="custom_input" style={{width:99+'%',marginBottom:24+'px'}} value={this.state.shortDescription} onChange={this.handleChange} required />
                                        <label className="custom_label">Short Description</label>
                                    </div>
                                </form>
                            </div>
                            <div className="modal__footer">
                                <button className="btn btn-primary" onClick={this.addMechanic}>Save</button>
                            </div>
                        </div>
                    </aside>
                )}
            </Fragment>
        );
    }
}