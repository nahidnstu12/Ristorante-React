import * as ActionTypes from './ActionTypes';
import {DISHES} from '../shared/dishes';

export const addComment = (dishId,rating,author,comment) =>({
    type:ActionTypes.ADD_COMMENTS,
    payload:{
        dishId,
        rating,
        author,
        comment
    }
});

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    setTimeout(()=>{
        dispatch(addDishes(DISHES));
    },2000);
};

export const dishesLoading = () =>({
    type:ActionTypes.LOAD_DISHES
});

export const dishesFailed = (errMsg) =>({
    type:ActionTypes.FAIL_DISHES,
    payload:errMsg
});

export const addDishes = (dishes) => ({
    type:ActionTypes.ADD_DISHES,
    payload:dishes
})