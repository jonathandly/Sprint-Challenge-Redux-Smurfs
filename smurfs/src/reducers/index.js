/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  FETCHING,
  CREATING,
  UPDATING,
  DELETING,
  GET_SMURFS,
  ADD_SMURF,
  UPDATE_SMURF,
  DELETE_SMURF
} from '../actions';

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
const reducer = (state = initialState, action) => {
  console.log(action.type);
  switch(action.type) {
    case FETCHING:
      return {
        ...state,
        fetchingSmurfs: true
      };
    case CREATING:
      return {
        ...state,
        addingSmurf: true,
        fetchingSmurfs: false
      };
    case UPDATING:
      return {
        ...state,
        addingSmurf: false,
        updatingSmurf: true
      };
    case DELETING:
      return {
        ...state,
        updatingSmurf: false,
        deletingSmurf: true
      };
    case GET_SMURFS:
      return {
        ...state,
        fetchingSmurfs: true,
        smurfs: action.payload
      };
    case ADD_SMURF:
      return {
        ...state,
        fetchingSmurfs: false,
        addingSmurf: true
      };
    case UPDATE_SMURF:
      return {
        ...state,
        addingSmurf: false,
        updatingSmurf: true
      };
    case DELETE_SMURF:
      return {
        ...state,
        updatingSmurf: false,
        deletingSmurf: true
      };
    default:
      return state;
  }
}

export default reducer;