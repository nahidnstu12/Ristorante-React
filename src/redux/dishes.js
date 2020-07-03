import * as ActionTypes from './ActionTypes';

export const Dishes = (
    state={isLoading:true,errMsg:null,dishes:[]},
    action) => {
    switch(action.type){
        case ActionTypes.LOAD_DISHES:
            return {...state,isLoading:true,errMsg:null,dishes:[]};
        case ActionTypes.FAIL_DISHES:
            return {...state,isLoading:false,errMsg:action.payload};
        case ActionTypes.ADD_DISHES:
            return {...state,isLoading:false,errMsg:null,dishes:action.payload};
        default:
            return state;
    }
}