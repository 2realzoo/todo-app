import { combineReducers } from 'redux';
import dateReducer from './dateRuducer';

const RootReducer = combineReducers({
    dateReducer,
});

export default RootReducer;