/**
 * Created by Damian.Czarnota on 2018-10-16.
 */
import { AUTHENTICATE, REGISTER, USER_INFO,IS_ADMIN } from "../constants/action-types.js";

export const authenticate = value => ({
    type:AUTHENTICATE,
    payload:value
});

export const register = value =>({
    type:REGISTER,
    payload:value
});

export const setUserInfo = value =>({
    type:USER_INFO,
    payload:value
});

export const isAdmin = value =>({
    type:IS_ADMIN,
    payload:value
});

export const getToken = () =>{
    return 'Bearer '+sessionStorage.getItem('Authorization')
};