import * as ActionTypes from './ActionTypes';

export const Feedback = (state={errMsg:null,feedback:[]},action) => {
    switch(action.types){
        case ActionTypes.ADD_FEEDBACK:
            return {...state,feedback:state.feedback.concat(action.payload)};
        default:
            return state;
    }
}
