import {
  ADD_SIGN_DATA_FAIL,
  ADD_SIGN_DATA_REQ,
  ADD_SIGN_DATA_SUCCESS,
  GET_SIGN_DATA_FAIL,
  GET_SIGN_DATA_REQ,
  GET_SIGN_DATA_SUCCESS,
  GET_TOP_USERS_FAIL,
  GET_TOP_USERS_REQ,
  GET_TOP_USERS_SUCCESS,
} from "../action-types";

const initialState = {
  signDataList: [],
  loading: false,
};


export const SignReducer = (state = initialState, action) => {

  const { type, payload } = action;

  switch (type) {
    case GET_SIGN_DATA_REQ: {
      return {
        ...state,
        loading: true,
      };
    }

    case GET_SIGN_DATA_SUCCESS: {
      return {
        ...state,
        signDataList: payload,
        loading: false,
      };
    }

    case GET_SIGN_DATA_FAIL: {
      return {
        ...state,
        loading: false,
        error: payload,
      };
    }

    case ADD_SIGN_DATA_REQ: {
      return {
        ...state,
        loading: true,
      };
    }

    case ADD_SIGN_DATA_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }

    case ADD_SIGN_DATA_FAIL: {
      return {
        ...state,
        loading: false,
        error: payload,
      };
    }

    default:
      return state;
  }
};


export const TopSignUsersReducer = (state = {
  loading: false,
  topUsers: [],
}, action) => {

  const { type, payload } = action;

  switch (type) {
    
    case GET_TOP_USERS_REQ: {
      return {
        ...state,
        loading: true,
      };
    }

    case GET_TOP_USERS_SUCCESS: {
      return {
        ...state,
        topUsers: payload,
        loading: false,
      };
    }

    case GET_TOP_USERS_FAIL: {
      return {
        ...state,
        loading: false,
        error: payload,
      };
    }

    default:
      return state;
  }
}