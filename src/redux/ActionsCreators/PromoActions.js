import * as ActionTypes from '../ActionTypes';
import {baseUrl} from '../../shared/baseUrl';

export const fetchPromos = () => dispatch => {
    dispatch(promosLoading());

    return fetch(baseUrl+'promotions')
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
    .then(promotions=> dispatch(addPromos(promotions)))
    .catch(error => dispatch((promosFailed(error.message))));
};
 const promosLoading = () => ({
    type:ActionTypes.PROMOS_LOADING
});
 const promosFailed = errMsg => ({
    type:ActionTypes.PROMOS_FAILED,
    payload:errMsg
});
 const addPromos = promos => ({
    type:ActionTypes.ADD_PROMOS,
    payload:promos
})
