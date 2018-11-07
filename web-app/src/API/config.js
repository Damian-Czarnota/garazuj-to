/**
 * Created by Damian.Czarnota on 2018-10-23.
 */

import {getToken} from '../actions/index';

export const URL = "http://localhost:8001/api";

export const headers = {
    'Content-Type': 'application/json',
    'Authorization': getToken()
};