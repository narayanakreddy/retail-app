import Axios from "axios";
import { store } from "../store";
import { SET_AUTH_TOKEN } from "../store/constants";
import Config from "../environment";

const axios = Axios.create({
  baseURL: Config.SERVICE_URL,
});

axios.interceptors.request.use(
  async (config) => {
    const { auth, app } = store.getState();
    const interceptedConfig = config;
    interceptedConfig.headers["Content-type"] = "application/json";
    interceptedConfig.headers["Accept-Language"] = app.language;

    if (auth.authToken !== null) {
      interceptedConfig.headers.Authorization = `Bearer ${auth.authToken}`;
    }
    if (interceptedConfig.method === "get") {
      interceptedConfig.params.channelType = "RETAIL";
      interceptedConfig.params.language = app.language;
      interceptedConfig.params.ipAddress = "0.0.0.0";
    } else if (interceptedConfig.method === "post") {
      interceptedConfig.data.channelType = "RETAIL";
      interceptedConfig.data.language = app.language;
      interceptedConfig.data.ipAddress = "0.0.0.0";
    }

    if (interceptedConfig.url.endsWith("/termsAndConditions")) {
      interceptedConfig.data.channelType = "INTERNET";
    }
    if (
      interceptedConfig.url !== "/bankingservices/public/login" &&
      interceptedConfig.url !==
        "/bankingservices/public/passwordReset/verify" &&
      interceptedConfig.url !==
        "/bankingservices/public/passwordReset/confirm" &&
      interceptedConfig.url !==
        "/bankingservices/public/userRegistration/verify" &&
      interceptedConfig.url !==
        "/bankingservices/public/userRegistration/confirm" &&
      interceptedConfig.url !==
        "/bankingservices/public/userRegistration/verifylink"
    ) {
      if (interceptedConfig.method === "post") {
        interceptedConfig.data.userName =
          app?.loginDetails?.userName || "DEFAULT";
      }
      if (interceptedConfig.method === "get") {
        interceptedConfig.params.userName =
          app?.loginDetails?.userName || "DEFAULT";
      }
    }
    return interceptedConfig;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => {
    if (response.headers?.access_token) {
      store.dispatch({
        type: SET_AUTH_TOKEN,
        payload: response.headers.access_token,
      });
    }
    // if (response.headers?.refresh_token) {
    //   store.dispatch({ type: SET_AUTH_REFRESH_TOKEN, payload: response.headers.refresh_token })
    // }
    return response;
  },
  async (error) => {
    if (error.response) {
      if (error.response.status === 403) {
        // if (error.response['data']['code'] === 'AGCM-0003') {
        //   return kikRefreshToken().then(() => {
        //     let config = error.config
        //     config.data = JSON.parse(error.config.data)
        //     return axios.request(config)
        //   })
        // } else {
        //   if (apiErrorCount === 0) {
        //     ++apiErrorCount
        //     toast(error.response?.data?.message)
        store.dispatch({ type: "USER_LOGOUT" });
        //   }
        // }
      } else {
        // store.dispatch({ type: SET_ERROR_MESSAGE, payload: error?.response })
      }
    } else {
      //   store.dispatch({
      //     type: SET_ERROR_MESSAGE,
      //     payload: {
      //       code: 'Network Error',
      //       message: 'It may server down.Please contact to Admin',
      //       errors: null,
      //     },
      //   })
      store.dispatch({ type: "USER_LOGOUT" });
    }

    return Promise.reject(error.response || error.request || error.message);
    // else if (error.request) {
    //   const errResponse={
    //     status:0,
    //     response:{data:{message:"Server down. Please Try Again Later"}},

    //   }
    //   return Promise.reject(errResponse)
    // }
  }
);

export default axios;
