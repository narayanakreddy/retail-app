import { Button, Divider, message } from "antd";
import React, { useState, useCallback } from "react";
import Webcam from "react-webcam";
import UploadImage from "../components/upload-image";
import { useDispatch, useSelector } from "react-redux";
import { identityInfoSelector, selfieImageSelector } from "../../../../store/selectors/customer.selector";

export default function UploadIdentityFront(props) {
  const webcamRef = React.useRef(null);
  const [showCamera, setShowCamera] = useState(false);
  const [showUpload, setShowUpload] = useState(true);
  const [frontImage, setFrontImage] = useState("");
  const [backImage, setBackImage] = useState("");
  const dispatch = useDispatch();
  const selfieImage = useSelector(selfieImageSelector);
  const [loader, setLoader] = useState(false);
  const idetityDetails = useSelector(identityInfoSelector);
  const verifyFacematch = useCallback(async () => {
    try {
      setLoader(true);
      // const response = await NewCustomerService.verifyFacematch(
      //   selfieImage.split(",")[1],
      //   frontImage.split(",")[1]
      // );
      // if (response.status === 200) {
      //   // if (response.data['match'] && response.data['matchScore'] > 60) {
      //   dispatch(setFrontImageInfo(frontImage));
      //   dispatch(setBackImageInfo(backImage));
      //   await getKycDetails();
      //   props.onNext();
      //   // } else {
      //   //   message.error('Uploaded or Captured an image of Id not match with real face.')
      //   // }
      // }
    } catch (err) {
      setLoader(false);
    }
  }, [frontImage, backImage]);

  const getKycDetails = useCallback(async () => {
    try {
      // const response = await NewCustomerService.getKycDetails(
      //   frontImage.split(",")[1],
      //   backImage.split(",")[1]
      // );
      // if (response.status === 200) {
      //   setLoader(false);

      //   dispatch(
      //     setBasicInfo({
      //       firstName: response.data["name"],
      //       dateOfBirth: response.data["dob"],
      //       gender: response.data["gender"] === "MALE" ? 1 : 2,
      //     })
      //   );

      //   dispatch(
      //     setAddressInfo({
      //       addrLine1: response.data["addrLine1"],
      //       addrLine2: response.data["addrLine2"],
      //       city: response.data["city"],
      //       district: response.data["district"],
      //       state: response.data["state"],
      //       pinCode: response.data["zipCode"],
      //       houseNumber: response.data["houseNumber"],
      //     })
      //   );

      //   dispatch(
      //     setFamilyInfo({
      //       fatherFirstName: response.data["father"],
      //       motherFirstName: response.data["mother"],
      //     })
      //   );
      // }
    } catch (err) {
      setLoader(false);
    }
  }, [frontImage, backImage]);

  // const postData = useCallback(() => {
  //   try {
  //     if (image.length === 0) {
  //       message.error('front image required')
  //       return
  //     }
  //   } catch (err) {}
  // }, [image])

  return (
    <>
      <h3>Upload {idetityDetails?.name}</h3>
      <p>Please upload the front and back image of {idetityDetails?.name} </p>

      <div className="row">
        {/* <div className='col-5'>
        <h3>Upload / Capture Id</h3>
        <p>Please upload or capture an image of ID Front </p>

        <img width={200} style={{ display: 'block', marginBottom: 76 }} src={uploadArrowIcon} />

        <div className='footer-btn-style'>
          <Button size='large' onClick={() => props.onBack()} style={{ marginRight: 30 }}>
            Back
          </Button>
          <Button loading={loader} size='large' type='primary' onClick={() => verifyFacematch()}>
            Next
          </Button>
        </div>
      </div> */}
        <div className="col-6">
          {/* <div style={{ textAlign: 'center' }} className='upload-options'>
            <span
              onClick={() => {
                setShowCamera(true)
                setShowUpload(false)
                setImage('')
              }}>
              <AiFillCamera style={{ fontSize: 30 }} /> Open Camera
            </span>
            <Divider type='vertical' />
            <span
              onClick={() => {
                setShowCamera(false)
                setShowUpload(true)
                setImage('')
              }}>
              <RiFileUploadFill style={{ fontSize: 30 }} /> Upload From Device
            </span>
          </div> */}
          <div className="capture-render-area">
            {/* {showCamera && image.length === 0 && (
              <Webcam
                ref={webcamRef}
                audio={false}
                height='260px'
                width={'100%'}
                screenshotFormat='image/jpeg'
                screenshotQuality={1}
                imageSmoothing={true}
                minScreenshotHeight={1000}
                minScreenshotWidth={1000}
                className='web-cam'
              />
            )} */}

            {/* {showCamera && image.length > 0 && (
              <img src={image} style={{ width: 410, height: 250 }} />
            )} */}

            {showUpload && (
              <div>
                <UploadImage
                  text="Front"
                  getUploadImage={(img) => {
                    setFrontImage(img);
                  }}
                />
              </div>
            )}
          </div>
          {/* {showCamera && image.length === 0 && (
            <div
              style={{
                marginTop: 20,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Button
                onClick={() => setImage(webcamRef.current.getScreenshot())}
                size='large'
                type='primary'>
                Take screenshot
              </Button>
            </div>
          )} */}

          {/* {showCamera && image.length > 0 && (
            <div
              style={{
                marginTop: 20,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Button
                onClick={() => {
                  setImage('')
                }}
                size='large'>
                Cancel
              </Button>
            </div>
          )} */}
        </div>

        <div className="col-6">
          {/* <div style={{ textAlign: 'center' }} className='upload-options'>
            <span
              onClick={() => {
                setShowCamera(true)
                setShowUpload(false)
                setImage('')
              }}>
              <AiFillCamera style={{ fontSize: 30 }} /> Open Camera
            </span>
            <Divider type='vertical' />
            <span
              onClick={() => {
                setShowCamera(false)
                setShowUpload(true)
                setImage('')
              }}>
              <RiFileUploadFill style={{ fontSize: 30 }} /> Upload From Device
            </span>
          </div> */}
          <div className="capture-render-area">
            {/* {showCamera && image.length === 0 && (
              <Webcam
                ref={webcamRef}
                audio={false}
                height='260px'
                width={'100%'}
                screenshotFormat='image/jpeg'
                screenshotQuality={1}
                imageSmoothing={true}
                minScreenshotHeight={1000}
                minScreenshotWidth={1000}
                className='web-cam'
              />
            )}

            {showCamera && image.length > 0 && (
              <img src={image} style={{ width: '100%', height: 250 }} />
            )} */}

            {showUpload && (
              <div>
                <UploadImage
                  text="Back"
                  getUploadImage={(img) => {
                    setBackImage(img);
                  }}
                />
              </div>
            )}
          </div>
          {/* {showCamera && image.length === 0 && (
            <div
              style={{
                marginTop: 20,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Button
                onClick={() => setImage(webcamRef.current.getScreenshot())}
                size='large'
                type='primary'>
                Take screenshot
              </Button>
            </div>
          )} */}

          {/* {showCamera && image.length > 0 && (
            <div
              style={{
                marginTop: 20,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Button
                onClick={() => {
                  setImage('')
                }}
                size='large'>
                Cancel
              </Button>
            </div>
          )} */}
        </div>
      </div>

      <div className="footer-btn-style">
        <Button
          size="large"
          onClick={() => props.onBack()}
          style={{ marginRight: 30 }}
        >
          Back
        </Button>
        <Button
          loading={loader}
          size="large"
          type="primary"
          onClick={() => verifyFacematch()}
        >
          Next
        </Button>
      </div>
    </>
  );
}
