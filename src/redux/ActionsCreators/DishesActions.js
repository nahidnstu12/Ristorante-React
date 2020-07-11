import * as ActionTypes from '../ActionTypes';
import {baseUrl} from '../../shared/baseUrl';

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading());

    return fetch(baseUrl+ 'dishes')
    .then(response => {
        if(response.ok){
            return response;
        }else{
            let error = new Error('Error' + response.status + ': '+ response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        let errMsg = new Error(error.message);
        throw errMsg;
    }
    )
    .then(response => response.json())
    .then(dishes=> dispatch(addDishes(dishes)))
    .catch(error => dispatch((dishesFailed(error.message))));
};

const dishesLoading = () =>({
    type:ActionTypes.LOAD_DISHES
});
 const dishesFailed = (errMsg) =>({
    type:ActionTypes.FAIL_DISHES,
    payload:errMsg
});
 const addDishes = (dishes) => ({
    type:ActionTypes.ADD_DISHES,
    payload:dishes
});