/**
 * Created by Damian.Czarnota on 2018-12-12.
 */

import { URL } from './config';
import {getToken} from '../actions/index';

export const getUsers = (query) =>
    fetch (`${URL}/users${query}`,{
        method:'GET',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': getToken()
        }
    }).then(res => res.json());


export const getUser = (id) =>
    fetch (`${URL}/user/${id}`,{
        method:'GET',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': getToken()
        }
    }).then(res => res.json());

export const deleteUser = (id) =>
    fetch (`${URL}/user/${id}`,{
        method:'DELETE',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': getToken()
        }
    }).then(res => res);