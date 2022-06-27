import React, { useState, useCallback, useEffect } from "react";
import "./new-customer.css";
import GetStarted from "./steps/getStarted";
import pageLogo from "../../../assests/images/logo/logo.svg";
// import NewCustomerService from "../../../services/new-customer.service";
import IdentityType from "./steps/identity";
import CaptureFace from "./steps/captureFace";
import BasicInfo from "./steps/basicInfo";
import FamilyInfo from "./steps/familyInfo";
// import AuthService from "../../../services/auth.service";
import Signature from "./steps/signature";
import UploadIdentityFront from "./steps/uploadIdentityFront";
// import Confirmation from "./steps/confirmation";
import AddressDetails from "./steps/addressDetails";
import { Divider } from "antd";
import { MdOutlineFlight } from "react-icons/md";
import { BsCheck2, BsClipboardCheck } from "react-icons/bs";
import ValidateMobile from "./steps/validateMobile";
import { useNavigate } from "react-router-dom";
import ValidateEmail from "./steps/validateEmail";
import ValidateMobileOtp from "./steps/verifymobileOtp";
import ValidateEmailOtp from "./steps/validateEmailOtp";

export default function NewCustomer() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [stage, setStage] = useState(10);
  const [masterData, setMasterData] = useState({});
  const history = useNavigate();
  const [countryList, setCountryList] = useState([]);
  const [branchList, setBranchList] = useState([]);
  const [verifyDetails, setVerifyDetails] = useState({});

  // useEffect(() => {
  //   getMasterData();
  //   getCountryCodes();
  //   // getBranchList()
  // }, []);

  // const getMasterData = useCallback(async (values) => {
  //   try {
  //     const response = await NewCustomerService.getRegistrationRequiredValues();
  //     if (response.status === 200) {
  //       setMasterData(response.data["data"]);
  //     }
  //   } catch (err) {}
  // }, []);

  // const getCountryCodes = useCallback(async (values) => {
  //   try {
  //     console.log("Test");
  //     const response = await AuthService.getCountryCodes();
  //     // if (response.status === 200) {
  //     // console.log(response.data)
  //     setCountryList(response["countryCodeList"]);
  //     // }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, []);

  // const getBranchList = useCallback(async (values) => {
  //   try {
  //     console.log("Test");
  //     const response = await NewCustomerService.getBranchList();
  //     if (response.status === 200) {
  //       // console.log(response.data)
  //       // setCountryList(response['countryCodeList'])
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, []);

  function renderSwitch() {
    switch (stage) {
      case 1:
        return (
          <>
            <ValidateMobile
              onBack={() => history("/login")}
              onNext={() => setStage(2)}
            />
          </>
        );

      case 2:
        return (
          <>
            <ValidateMobileOtp
              onBack={() => setStage(1)}
              onNext={() => setStage(3)}
            />
          </>
        );

      case 3:
        return (
          <>
            <ValidateEmail
              onBack={() => history("/login")}
              onNext={() => setStage(4)}
            />
          </>
        );

      case 4:
        return (
          <>
            <ValidateEmailOtp
              onBack={() => setStage(3)}
              onNext={() => setStage(5)}
            />
          </>
        );

      case 5:
        return (
          <>
            <h3>Terms And Conditions</h3>
            <GetStarted
              onBack={() => history("/login")}
              onNext={() => setStage(6)}
            />
          </>
        );

      case 6:
        return (
          <>
            <h3>Identity Information</h3>
            <p>Please fill the identity information </p>
            <IdentityType
              onBack={() => history("/login")}
              onNext={() => setStage(7)}
              masterData={masterData}
              countryList={countryList}
            />
          </>
        );
      case 7:
        return (
          <>
            <CaptureFace
              onBack={() => setStage(6)}
              onNext={() => setStage(8)}
              masterData={masterData}
            />
          </>
        );

      case 8:
        return (
          <>
            <UploadIdentityFront
              onBack={() => setStage(7)}
              onNext={() => setStage(9)}
              masterData={masterData}
            />
          </>
        );

      case 9:
        return (
          <>
            <h3>Basic Information</h3>
            <p>Please fill the basic information </p>
            <BasicInfo
              onBack={() => history("/login")}
              onNext={() => setStage(10)}
              masterData={masterData}
            />
          </>
        );

      case 10:
        return (
          <>
            <h3>Family Information</h3>
            <p>Please fill the family and spouse details </p>
            <FamilyInfo
              onBack={() => setStage(8)}
              onNext={() => setStage(11)}
              masterData={masterData}
            />
          </>
        );

      case 11:
        return (
          <>
            <h3>Address Information</h3>
            <p>Please fill the address details </p>
            <AddressDetails
              onBack={() => setStage(10)}
              onNext={() => setStage(12)}
              masterData={masterData}
            />
          </>
        );

      case 12:
        return (
          <>
            <Signature
              onBack={() => setStage(11)}
              onNext={() => setStage(13)}
              masterData={masterData}
            />
          </>
        );

      // case 13:
      //   return (
      //     <>
      //       <Confirmation onBack={() => setStage(12)} masterData={masterData} />
      //     </>
      //   );

      default:
        return <GetStarted />;
    }
  }

  return (
    <div className="h-100 new-customer-wrapper">
      <div className="new-customer-container">
        <div className="new-customer-header">
          <div>
            <img width={150} src={pageLogo} />
          </div>
          <div>
            <Divider orientation="center" type="horizontal">
              <div className="customer-steps">
                <div>
                  <div
                    className="n-circle"
                    style={
                      stage > 0
                        ? { background: "#F6834C" }
                        : { background: "#dadada" }
                    }
                  >
                    <MdOutlineFlight
                      className="icon-style"
                      style={
                        stage > 0 ? { color: "#fff" } : { color: "#6e6e6e" }
                      }
                    />
                  </div>
                  <span>Get Started</span>
                </div>

                <div>
                  <div
                    className="n-circle"
                    style={
                      stage > 1
                        ? { background: "#F6834C" }
                        : { background: "#dadada" }
                    }
                  >
                    <BsClipboardCheck
                      className="icon-style"
                      style={
                        stage > 1 ? { color: "#fff" } : { color: "#6e6e6e" }
                      }
                    />
                  </div>
                  <span>Registration</span>
                </div>

                <div>
                  <div className="n-circle">
                    <BsCheck2 className="icon-style" />
                  </div>
                  <span>Completd</span>
                </div>
              </div>
            </Divider>
          </div>
        </div>
        <div className="new-customer-render-section">
        {renderSwitch()}
        </div>
        
      </div>
    </div>
  );
}
