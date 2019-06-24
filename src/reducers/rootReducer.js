import cardReducer from "./cardReducer";
import {combineReducers} from 'redux';

const rootReducer= combineReducers({
    cardR: cardReducer,
});

export default rootReducer;