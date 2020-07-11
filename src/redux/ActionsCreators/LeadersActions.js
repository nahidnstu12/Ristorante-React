import * as ActionTypes from '../ActionTypes';
import {baseUrl} from '../../shared/baseUrl';

// Assignment - 4.1
export const fetchLeaders = () => dispatch => {
    dispatch(leaderLoading());

    return fetch(baseUrl+'leaders')
    .then(res => {
        if(res.ok){
            return res;
        }else{
            let error = new Error('Error' + res.status + ': '+ res.statusText);
            error.response = res;
            throw error;
        }
    },
    error => {
        let errMsg = new Error(error.message);
        throw errMsg;
    }
    )
    .then(res => res.json())
    .then(leaders=> dispatch(addLeader(leaders)))
    .catch(error => dispatch((leaderFailed(error.message))));
};
 const leaderLoading = () => ({
    type:ActionTypes.LEADER_LOADING
});
 const leaderFailed = errMsg => ({
    type:ActionTypes.LEADER_FAILED,
    payload:errMsg
});
 const addLeader = leaders => ({
    type:ActionTypes.ADD_LEADER,
    payload:leaders
})