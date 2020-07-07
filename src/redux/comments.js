import * as ActionTypes from './ActionTypes';

export const Comments = (state={errMsg:null,comments:[]},action) => {
    switch(action.type){
        case ActionTypes.ADD_COMMENT:
            let comment = action.payload;
            // console.log("Comment->",comment);
            return {...state,comments:state.comments.concat(comment)}
        case ActionTypes.COMMENTS_FAILED:
            return {...state,errMsg:action.payload,comments:[]};
        case ActionTypes.ADD_COMMENTS:
            return {...state,errMsg:null,comments:action.payload};
        
        default:
            return state;
    }
}