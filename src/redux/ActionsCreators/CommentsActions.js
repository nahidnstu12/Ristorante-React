import * as ActionTypes from '../ActionTypes';
import {baseUrl} from '../../shared/baseUrl';

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

const commentsFailed = errMsg => ({
    type:ActionTypes.COMMENTS_FAILED,
    payload:errMsg
});

 const addComment = comment => ({
    type:ActionTypes.ADD_COMMENT,
    payload:comment
});

const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
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