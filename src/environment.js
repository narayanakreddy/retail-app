const DEV = {
  ENCRYPT_KEY: "20E38214tC181205",
  SERVICE_URL: "https://14.143.217.151/apigateway_apix",
  GOOGLE_MAPS_API_KEY: "AIzaSyD94dYAJU4hkOyMi3mz6QGWxUsqkAx-9Ag",
  ACC_NO_VALIDATION: "^[0-9]{32,32}$",
  COUNTRY_CODE: "91",
  LOCAL_CURRENCY_CODE: "INR",
  CHARGE_BORNE_BY: false,
  BENE_BRANCH: true,
  REMARKS_MAX: "50",
  CLIENT_NAME: "IZB",
  TRANSFER_TYPES: ["IAT", "DDACC", "RTGS", "REGION"],
  SI_TRANSFER_TYPES: ["IAT", "DDACC", "RTGS"],
  CHEQUE_STATUS: ["N", "U", "S", "R"],
  LANGUAGE_LIST: ["en", "fr", "kh", "zh"],
  MONTHEND: true,
  LANGUAGE_SELECTION: true,
  STOP_CHEQUE_REASON_LIST: ["Lost", "Stolen", "Damaged"],
  TD_CLOSE_INSTRUCTION: true,
  TD_PAYMENT_METHOD: ["R", "M", "Q"],
  FX_DEAL_REF_NO: true,
  COORDINATES: { lat: -17.8252, lng: 31.0335 },
  UNIQUE_ID_TYPE: ["PASSPORT", "NATIONALID", "DRIVINGLICENCE"],
  AUTH_LAYOUT_TYPE: "SLIDE", // STATIC
  DOB_MINOR_AGE_VALIDATION: 18,
  TD_TENURE_ONLY_ONE: false,
  TD_TENURE_SELECT_ANY: false,
  TD_TENURE_DEFAULT_FROM_PRODUCT: true,
  CHEQUE_NO_LENGTH: "^[0-9]{6,10}$",
  TC_MODULE_TYPE: "CUSTOM", //GENERAL
  MIN_TRANSFER_LIMIT: 1,
  ACC_NO_LENGTH: 50,
  BENEFICIARY_TRANSFER_TABS: ["INTERNAL", "DOMESTIC", "INTERNATIONAL", "OWN", "REGION"],
  APP_ANDROID_LINK:"",
  APP_IOS_LINK:"",
  CARD_REQUEST_TYPES: ["NEW", "RENEWAL", "REPLACEMENT"],
  SAVING_ACCOUNT_TYPES: ['S', 'WA', 'PWA', 'LWA'],
  CURRENT_ACCOUNT_TYPES: ['C', 'U'],
  DEPOSIT_ACCOUNT_TYPES: ['T', 'Y'],
  LOAN_ACCOUNT_TYPES: ['L', 'CL'],
};

const PROD = {
  ENCRYPT_KEY: "20E38214tC181205",
  SERVICE_URL: "https://14.143.217.151/apigateway_apix",
  GOOGLE_MAPS_API_KEY: "AIzaSyD94dYAJU4hkOyMi3mz6QGWxUsqkAx-9Ag",
  ACC_NO_VALIDATION: "^[0-9]{32,32}$",
  COUNTRY_CODE: "91",
  LOCAL_CURRENCY_CODE: "INR",
  CHARGE_BORNE_BY: false,
  BENE_BRANCH: true,
  REMARKS_MAX: "50",
  CLIENT_NAME: "IZB",
  TRANSFER_TYPES: ["IAT", "DDACC", "RTGS", "REGION"],
  SI_TRANSFER_TYPES: ["IAT", "DDACC", "RTGS"],
  CHEQUE_STATUS: ["N", "U", "S", "R"],
  LANGUAGE_LIST: ["en", "fr", "kh", "zh"],
  MONTHEND: true,
  LANGUAGE_SELECTION: true,
  STOP_CHEQUE_REASON_LIST: ["Lost", "Stolen", "Damaged"],
  TD_CLOSE_INSTRUCTION: true,
  TD_PAYMENT_METHOD: ["R", "M", "Q"],
  FX_DEAL_REF_NO: true,
  COORDINATES: { lat: -17.8252, lng: 31.0335 },
  UNIQUE_ID_TYPE: ["PASSPORT", "NATIONALID", "DRIVINGLICENCE"],
  AUTH_LAYOUT_TYPE: "SLIDE", // STATIC
  DOB_MINOR_AGE_VALIDATION: 18,
  TD_TENURE_ONLY_ONE: false,
  TD_TENURE_SELECT_ANY: false,
  TD_TENURE_DEFAULT_FROM_PRODUCT: true,
  CHEQUE_NO_LENGTH: "^[0-9]{6,10}$",
  TC_MODULE_TYPE: "CUSTOM", //GENERAL
  MIN_TRANSFER_LIMIT: 1,
  ACC_NO_LENGTH: 50,
  BENEFICIARY_TRANSFER_TABS: ["INTERNAL", "DOMESTIC", "INTERNATIONAL", "OWN", "REGION"],
  APP_ANDROID_LINK:"",
  APP_IOS_LINK:"",
  CARD_REQUEST_TYPES: ["NEW", "RENEWAL", "REPLACEMENT"],
  SAVING_ACCOUNT_TYPES: ['S', 'WA', 'PWA', 'LWA'],
  CURRENT_ACCOUNT_TYPES: ['C', 'U'],
  DEPOSIT_ACCOUNT_TYPES: ['T', 'Y'],
  LOAN_ACCOUNT_TYPES: ['L', 'CL'],
};
const config = process.env.REACT_APP_STAGE === "PROD" ? PROD : DEV;

export default { ...config };