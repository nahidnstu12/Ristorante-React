import * as ActionTypes from './ActionTypes';
import {baseUrl} from '../shared/baseUrl';

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
});
export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});
export const fetchComment = () => dispatch => {
    return fetch(baseUrl+'comments')
    .then(response => {
        if(response.ok) {
            return response;
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    }, 
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
};

export const commentsFailed = errMsg => ({
    type:ActionTypes.COMMENTS_FAILED,
    payload:errMsg
});
export const addComment = comment => ({
    type:ActionTypes.ADD_COMMENT,
    payload:comment
});
export const postComment = (dishId,rating,author,comment) => dispatch =>{
    const newComment = {
        dishId,
        rating,
        author,
        comment
    }
    newComment.date = new Date().toISOString();
    return fetch(baseUrl+'comments',{
        method:"POST",
        body:JSON.stringify(newComment),
        headers:{"Content-Type": "application/json"},
        credentials:"same-origin"
    })
    .then(response => {
        if (response.ok) {
            return response;
          } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
          }
        },
        error => {
            throw error;
    })
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error =>  { console.log('post comments', error.message); 
            alert('Your comment could not be posted\nError: '+error.message); });

}
// Assignment 4.2
export const postFeedback = (firstname,lastname,email,tel,agree,contactType,message) => dispatch =>{
    const newFeedback = {
        firstname,lastname,email,tel,agree,contactType,message
    }
    newFeedback.date = new Date().toISOString();
    return fetch(baseUrl+'feedback',{
        method:"POST",
        body:JSON.stringify(newFeedback),
        headers:{"Content-Type": "application/json"},
        credentials:"same-origin"
    })
    .then(response => {
        if (response.ok) {
            return response;
          } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
          }
        },
        error => {
            throw error;
    })
    .then(response => response.json())
    .then(response => dispatch(addFeedback(response)))
    .catch(error =>  { console.log('post Feedback', error.message); 
            alert('Your Feedback could not be posted\nError: '+error.message); });

}
export const addFeedback = (feedback)=>({
    type:ActionTypes.ADD_FEEDBACK,
    payload:feedback
})
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
export const promosLoading = () => ({
    type:ActionTypes.PROMOS_LOADING
});
export const promosFailed = errMsg => ({
    type:ActionTypes.PROMOS_FAILED,
    payload:errMsg
});
export const addPromos = promos => ({
    type:ActionTypes.ADD_PROMOS,
    payload:promos
})
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
export const leaderLoading = () => ({
    type:ActionTypes.LEADER_LOADING
});
export const leaderFailed = errMsg => ({
    type:ActionTypes.LEADER_FAILED,
    payload:errMsg
});
export const addLeader = leaders => ({
    type:ActionTypes.ADD_LEADER,
    payload:leaders
})