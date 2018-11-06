/**
 * Created by Damian.Czarnota on 2018-10-23.
 */
import { headers, URL } from './config';

export const logout = () =>
    fetch(`${URL}/logout`,
        {method: 'POST'})
        .then(res => res.json());

export const logIn = (user) =>
    fetch(`${URL}/auth/signin`,{
        method:'POST',
        headers:headers,
        body:JSON.stringify(user)
    })
        .then(res => res.json());

export const createAccount = (user) =>
    fetch(`${URL}/auth/signup`,{
        method:'POST',
        headers:headers,
        body:JSON.stringify(user)
    })
        .then(res => res);

export const authenticate = (credentials, callback) => {


};