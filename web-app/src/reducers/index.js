/**
 * Created by Damian.Czarnota on 2018-10-16.
 */

import { AUTHENTICATE,REGISTER,USER_INFO,IS_ADMIN} from '../constants/action-types';

const initialState={
    authenticated:null,
    register:false,
    userInfo:{},
    isAdmin:false,
    token:''
};

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case AUTHENTICATE:
            return {...state, authenticated:action.payload};
        case REGISTER:
            return {...state, register:action.payload};
        case USER_INFO:
            return {...state,userInfo:action.payload};
        case IS_ADMIN:
            return {...state,isAdmin:action.payload};
        default:
            return state;
    }
};


export default rootReducer;