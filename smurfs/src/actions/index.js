/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

import axios from 'axios';

export const FETCHING = "FETCHING";
export const CREATING = "CREATING";

export const UPDATING = "UPDATING";
export const DELETING = "DELETING";

export const GET_SMURFS = "GET_SMURFS";
export const ADD_SMURF = "ADD_SMURF";

export const UPDATE_SMURF = "UPDATE_SMURF";
export const DELETE_SMURF = "DELETE_SMURF";

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING });
  return axios 
    .get('http://localhost:3333/smurfs')
    .then(res => {
      dispatch({ type: GET_SMURFS, payload: res.data });
    })
    .catch(err => {
      console.log('ERROR!: ', `${err}`);
    });
}

export const addSmurf = smurf => dispatch => {
  dispatch({ type: CREATING });
  return axios 
    .post('http://localhost:3333/smurfs', smurf)
    .then(res => {
      dispatch({ type: ADD_SMURF, payload: res.data });
    })
    .catch(err => 'ERROR!: ', `$err}`);
}