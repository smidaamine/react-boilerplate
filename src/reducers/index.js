import {combineReducers} from 'redux';

import hello from './hello';





const rootReducer = combineReducers({
hello : hello

});

export default rootReducer;