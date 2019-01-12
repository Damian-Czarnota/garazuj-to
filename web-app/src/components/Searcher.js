import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Searcher extends Component {

    static propTypes = {
        getItems: PropTypes.func.isRequired
    };

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange({target}){
        this.props.getItems(`?search=${target.value}`);
    };

    render() {
        return(
            <div>
                <input className="input-style" name="search" type="text" placeholder="Search..." onChange={this.handleChange}/>
            </div>
        )
    }
}