import {combineReducers} from 'redux';
import metamaskReducer from './metamaskReducer';

export default combineReducers({
    metamask: metamaskReducer
})