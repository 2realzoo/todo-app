import { combineReducers } from 'redux';
import dateReducer from './dateReducer';
import todoDataReducer from './todoDataReducer';

const RootReducer = combineReducers({
    dateReducer,
    todoDataReducer,
});

export default RootReducer;