import {
  SET_APP_LANGUAGE,
  SET_LOGIN_DETAILS,
  SET_USER_PROFILE,
} from "../constants";

const initialState = {
  language: "en",
  loginDetails: {},
  profileDetails: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_APP_LANGUAGE:
      return { ...state, language: payload };
    case SET_LOGIN_DETAILS:
      return { ...state, loginDetails: payload };
    case SET_USER_PROFILE:
      return { ...state, profileDetails: payload };
    default:
      return state;
  }
};
