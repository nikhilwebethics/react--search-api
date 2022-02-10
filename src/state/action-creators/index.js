import axios from 'axios';
import { FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from '../userTypes';
  

export const AddMoney = (amount) => {
    return (dispatch) => {
        dispatch({
         type: 'add',
         payload:amount
        })
    }
}

export const SubtractMoney = (amount) => {
    return (dispatch) => {
        dispatch({
         type: 'subtract',
         payload:amount
        })
    }
}

//Fetching Api Data Action

export const fetchUsers = () => {
    return (dispatch) => {
      dispatch(fetchUsersRequest())
      axios
        .get(`https://renemorozowich.com/wp-json/wp/v2/posts?filter[posts_per_page]=10&page=1&&_embed`)
        .then(response => {
          // response.data is the users
          const users = response.data
          dispatch(fetchUsersSuccess(users))
        })
        .catch(error => {
          // error.message is the error message
          dispatch(fetchUsersFailure(error.message))
        })
    }
  }
  
  export const fetchUsersRequest = () => {
    return {
      type: FETCH_USERS_REQUEST
    }
  }
  
  export const fetchUsersSuccess = users => {
    return {
      type: FETCH_USERS_SUCCESS,
      payload: users
    }
  }
  
  export const fetchUsersFailure = error => {
    return {
      type: FETCH_USERS_FAILURE,
      payload: error
    }
  }

