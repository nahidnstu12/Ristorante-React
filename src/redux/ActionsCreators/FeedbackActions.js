import * as ActionTypes from '../ActionTypes';
import {baseUrl} from '../../shared/baseUrl';
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
 const addFeedback = (feedback)=>({
    type:ActionTypes.ADD_FEEDBACK,
    payload:feedback
})
