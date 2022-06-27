import {
  SET_APP_LANGUAGE,
  SET_LOGIN_DETAILS,
  SET_USER_PROFILE
} from "../constants";

export const setAppLanguage = (payload) => ({
  type: SET_APP_LANGUAGE,
  payload,
});
export const setLoginDetails = (payload) => ({
  type: SET_LOGIN_DETAILS,
  payload,
});
export const setProfileDetails = (payload) => ({
  type: SET_USER_PROFILE,
  payload,
});
