/**
 * Created by Damian.Czarnota on 2018-10-16.
 */
import { createStore } from 'redux';
import rootReducer from '../reducers/index';

const store = createStore(rootReducer);

export default store;