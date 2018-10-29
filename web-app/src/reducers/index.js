/**
 * Created by Damian.Czarnota on 2018-10-16.
 */

import { AUTHENTICATE} from '../constants/action-types';

const initialState={
    articles:[],
    employees:[],
    authenticated: true
};

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case AUTHENTICATE:
            return {...state, authenticated:action.payload};
        default:
            return state;
    }
};


export default rootReducer;