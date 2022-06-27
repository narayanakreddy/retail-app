import * as CryptoJS from "crypto-js";
import http from "./http.service";
import Config from "../config/constant";
import envConfig from "../environment";
import { store } from "../store";
import { SET_LOGIN_DETAILS, SET_USER_PROFILE } from "../store/constants";

const AES_SECRET_KEY = CryptoJS.enc.Utf8.parse(envConfig.ENCRYPT_KEY);
const encryptAES = (text) =>
  CryptoJS.AES.encrypt(text, AES_SECRET_KEY, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  }).toString();

const decryptAES = (text) =>
  CryptoJS.AES.decrypt(text, AES_SECRET_KEY, {
    mode: CryptoJS.mode.ECB,
  });

const postLogin = async (data) => {
  try {
    const encryptedPassword = await encryptAES(data?.password);
    const reqParams = {
      password: encryptedPassword,
      userName: data?.username,
      requestId: "LOGIN",
      module: "LOGIN",
    };
    const response = await http.post(Config.LOGIN, reqParams, {});
    store.dispatch({ type: SET_LOGIN_DETAILS, payload: response.data });
    return { status: response.status, data: response.data };
  } catch (err) {
    return Promise.reject(err);
  }
};

const verifyOTP = async (data) => {
  try {
    const reqParams = {
      requestId: "LOGIN",
      module: "LOGIN",
      ...data,
    };
    const response = await http.post(Config.LOGIN_OTP_VERIFY, reqParams);
    return { status: response.status, data: response.data };
  } catch (err) {
    return Promise.reject(err);
  }
};

const logoutUser = async () => {
  try {
    const reqParams = {
      module: "LOGIN",
      requestId: "LOGOUT",
    };
    const response = await http.post(Config.LOGOUT, reqParams);
    return { status: response.status, data: response.data };
  } catch (err) {
    return Promise.reject(err);
  }
};

const getUserProfile = async () => {
  try {
    const reqParams = {
      requestId: "USERPROFILE",
    };
    const response = await http.post(Config.GET_PROFILE_DETAILS, reqParams);
    store.dispatch({
      type: SET_USER_PROFILE,
      payload: response.data.profileDetails,
    });
    return response.data;
  } catch (err) {
    return Promise.reject(err);
  }
};

const AuthService = {
  postLogin,
  verifyOTP,
  logoutUser,
};

export default AuthService;
