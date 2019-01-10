/**
 * Created by Damian.Czarnota on 2010-01-10.
 */

import React, {Component} from 'react';
import AddMechanic from '../containers/AddMechanic';
import * as MechanicAPI from '../API/MechanicAPI';
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { isAdmin: state.isAdmin};
};

class Mechanics extends Component {
    constructor(props){
        super(props);
        this.state={
            mechanics:[]
        };
        this.getMechanics = this.getMechanics.bind(this);
    }

    componentWillMount(){
        this.getMechanics()
    }

    getMechanics(){
        MechanicAPI.getAll().then(res =>{
            if(!res.status){
                this.setState({mechanics:res})
            }
        })
    }

    deleteMechanic(id){
        MechanicAPI.deleteMechanic(id).then(res =>{
            if(res.status===200)
                this.getMechanics();
        })
    }

    render(){
        return(
            <div className="guides_panel">
                <div className="header">
                    <h2 className="header__title">Mechanics</h2>
                </div>
                <div className="content">
                    <div className="section">
                        <div className="section__header">
                            <span>&nbsp;</span>
                            <AddMechanic getMechanics={this.getMechanics} />
                        </div>
                    </div>
                    <div className="section">
                        <div className="section__middle">
                            {this.state.mechanics.length>0&&this.state.mechanics.map(mechanic =>(<div key={mechanic.id} className="article">
                                <div className="article__image">
                                    <i className="fas fa-toolbox icon"></i>
                                </div>
                                <div className="article__description">
                                    <p className="title">{mechanic.title}</p>
                                    <p className="content">{mechanic.shortDescription}</p>
                                    {this.props.isAdmin&&(<button className="btn btn-danger" onClick={(e) => this.deleteMechanic(mechanic.id)}>Delete</button>)}
                                </div>
                            </div>))}
                            {this.state.mechanics.length===0&&(
                                <div className="empty-grid">
                                    <i className="fab fa-connectdevelop"></i>
                                    <p>There is no mechanics.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default connect(mapStateToProps)(Mechanics)
