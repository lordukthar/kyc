
import { combineReducers } from "redux";

const CHANGE_NAME = "CHANGE_NAME";


const defaultUser = {
    name: "unknown"
  };

export function loginUser(user) {
    return {
      type: CHANGE_NAME,
      user,
    };
  }

  function userReducer(state = defaultUser, action) {
    console.log("FOO userReducer" + JSON.stringify(action));
  
    switch (action.type) {
      case CHANGE_NAME:
        return {
          name: action.user
        };
      default:
        return state;
    }
  }
  
  const kycStoreApp = combineReducers({
    userReducer: userReducer,
  });
  
  export default kycStoreApp;