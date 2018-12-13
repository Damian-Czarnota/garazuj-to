/**
 * Created by Damian.Czarnota on 2018-12-13.
 */


import React, {Component} from 'react';
import DisplayAvatar from '../components/DisplayAvatar';
import {Link} from 'react-router-dom';

export default class CarSquare extends Component {

    render(){
        let {car} = this.props;
        return(
        <Link className="square" to={`../car/${car.id}`}>
                <DisplayAvatar image={car.image} size={70} label={'car'}/>
                <p className="secondary-text m-0">{car.brand} {car.model}</p>
                <p className="third-text m-0">({car.productionYear})</p>
        </Link>

        )
    }
}