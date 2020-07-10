import * as ActionTypes from './ActionTypes';

export const Leaders = (state=
    {isLoading:true,errMsg:null,leaders:[]},
    action) => {

    switch(action.type){
        case ActionTypes.LEADER_LOADING:
            return {...state,isLoading:true,errMsg:null,leaders:[]};
        case ActionTypes.LEADER_FAILED:
            return {...state,isLoading:false,errMsg:action.payload};
        case ActionTypes.ADD_LEADER:
            return {...state,isLoading:false,errMsg:null,leaders:action.payload};
        default:
            return state;
    }
}