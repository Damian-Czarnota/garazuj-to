import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Filter extends Component {

    static propTypes = {
        config: PropTypes.array.isRequired,
        getItems: PropTypes.func.isRequired
    };

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(name){
        this.props.getItems(`?fuelType=${name}`);
    };

    render() {
        let {config} = this.props;
        return(
            <div>Filters: {config.map((button,index) =>(
                <button key={index} className="btn btn-primary" onClick={(e) =>{this.handleChange(`${button.name}`)}}>{button.name}</button>
            ))}
                <button className="btn btn-primary" onClick={(e) =>{this.handleChange('')}}>ALL</button>
            </div>
        )
    }
}