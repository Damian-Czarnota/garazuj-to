/**
 * Created by Damian.Czarnota on 2018-11-19.
 */

import { URL } from './config';
import {getToken} from '../actions/index';

export const add = (mechanic) =>
    fetch(`${URL}/mechanics`,{
    method:'POST',
    headers:{
        'Content-Type': 'application/json',
        'Authorization': getToken()
    },
    body:JSON.stringify(mechanic)
})
    .then(res => res);

export const getAll = () =>
    fetch(`${URL}/mechanics`,{
        method:'GET',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': getToken()
        }
    })
        .then(res => res.json());

export const deleteMechanic = (id) =>
    fetch(`${URL}/mechanics?id=${id}`,{
        method:'DELETE',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': getToken()
        }
    })
        .then(res => res);