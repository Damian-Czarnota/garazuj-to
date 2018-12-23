/**
 * Created by Damian.Czarnota on 2018-11-19.
 */

import { URL } from './config';
import {getToken} from '../actions/index';

export const add = (carID,item) =>
    fetch(`${URL}/history/car/${carID}`,{
        method:'PUT',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': getToken()
        },
        body:JSON.stringify(item)
    })
        .then(res => res);

export const deleteItem = (id) =>
    fetch(`${URL}/history/${id}`,{
        method:'DELETE',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': getToken()
        }
    })
        .then(res => res);

export const getCarHistory = (id) =>
    fetch(`${URL}/history/car/${id}`,{
        method:'GET',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': getToken()
        }
    })
        .then(res => res.json());
