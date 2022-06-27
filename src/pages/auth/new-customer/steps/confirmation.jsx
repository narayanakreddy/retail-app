import { Button, Card, Image } from 'antd'
import React, { useCallback, useState } from 'react'
import moment from 'moment'
import { render } from 'react-dom'
import { useSelector } from 'react-redux'
import NeoOTP from '../../../../components/FormComponents/NeoOTP'
import NeoSuccess from '../../../../components/FormComponents/NeoSuccess'
import {
  accountInfoSelector,
  addressInfoSelector,
  backImageSelector,
  basicInfoSelector,
  emailIdSelector,
  familyInfoSelector,
  frontImageSelector,
  identityInfoSelector,
  mobileNumberSelector,
  selfieImageSelector,
  signatureSelector,
} from '../../../../selectors/customer.selector'
import NewCustomerService from '../../../../services/new-customer.service'
import OtpInput from 'react-otp-input'

export default function Confirmation(props) {
  const accountInfo = useSelector(accountInfoSelector)
  const identityInfo = useSelector(identityInfoSelector)
  const basicInfo = useSelector(basicInfoSelector)
  const familyInfo = useSelector(familyInfoSelector)
  const addressInfo = useSelector(addressInfoSelector)
  const selfieImage = useSelector(selfieImageSelector)
  const frontImage = useSelector(frontImageSelector)
  const backImage = useSelector(backImageSelector)
  const signature = useSelector(signatureSelector)
  const emailId = useSelector(emailIdSelector)
  const mobileNumber = useSelector(mobileNumberSelector)

  const [loading, setLoading] = useState(false)
  const [otp, setOtp] = useState('')
  const [stage, setStage] = useState(1)
  const [verifyDetails, setVerifyDetails] = useState({})
  const [message, setMessage] = useState('')

  const onConfirm = useCallback(async () => {
    try {
      debugger
      const reqParams = {
        // accountType: accountInfo['accountType'] || '',
        namePrefix: basicInfo['namePrefix'] || '',
        customerIdentifier: identityInfo['name'] || '',
        lastName: basicInfo['lastName'] || '',
        middleName: basicInfo['middleName'] || '',
        firstName: basicInfo['firstName'] || '',
        dateOfBirth: moment(basicInfo['dateOfBirth']).format('YYYY-MM-DD') || '',
        placeOfBirth: basicInfo['placeOfBirth'] || '',
        nationality: basicInfo['nationality'] || '',
        identityNumber: identityInfo['identityNumber'] || '',
        issueDate:
          identityInfo['issueDate'] !== null
            ? moment(identityInfo['issueDate']).format('YYYY-MM-DD')
            : '',
        expiredDate:
          identityInfo['expiredDate'] !== null
            ? moment(identityInfo['expiredDate']).format('YYYY-MM-DD')
            : '',
        countryOfIssuance: identityInfo['countryOfIssuance'] || '',
        emailId: emailId || '',
        mobileNumber: mobileNumber || '',
        selfieImageData: selfieImage.split(',')[1],
        idProofFrontImageData: frontImage.split(',')[1],
        idProofBackImageDate: backImage.split(',')[1],
        signatureImageData: signature.split(',')[1],
        proofOfResidenceImageData: '',
        // branchName: accountInfo['name'] || '',
        // branchId: accountInfo['branchId'] || '',
        otp: otp,
        randomKey: verifyDetails['randomKey'] || '',
        maritalStatus: basicInfo['maritalStatus'] || '',
        fatherNamePrefix: familyInfo['fatherNamePrefix'] || '',
        fatherFirstName: familyInfo['fatherFirstName'] || '',
        fatherMiddleName: familyInfo['fatherMiddleName'] || '',
        fatherLastName: familyInfo['fatherLastName'] || '',
        motherNamePrefix: familyInfo['motherNamePrefix'] || '',
        motherFirstName: familyInfo['motherFirstName'] || '',
        motherMiddleName: familyInfo['motherMiddleName'] || '',
        motherLastName: familyInfo['motherLastName'] || '',
        spouseNamePrefix: familyInfo['spouseNamePrefix'] || '',
        spouseFirstName: familyInfo['spouseFirstName'] || '',
        spouseMiddleName: familyInfo['spouseMiddleName'] || '',
        spouseLastName: familyInfo['spouseLastName'] || '',
        gender: basicInfo['gender'] || '',
        // citizenship: basicInfo['citizenship'] || '',
        occupationType: basicInfo['stringoccupationType'] || '',
        idProofType: identityInfo['idProofType'] || '',
        addrLine1: addressInfo['addrLine1'] || '',
        addrLine2: addressInfo['addrLine2'] || '',
        houseNumber: addressInfo['houseNumber'] || '',
        district: addressInfo['district'] || '',
        state: addressInfo['state'] || '',
        pinCode: addressInfo['pinCode'] || '',
        city: addressInfo['city'] || '',
        residentialStatus: '',
        region: '',
        fatherName: '',
        motherName: '',
        religion: '',
        caste: '',
        casteCategory: '',
        addressType: '2',
        phoneType: '3',
        kycType: '1',
        address: '',
      }
      console.log(reqParams)
      setLoading(true)
      const response = await NewCustomerService.postCreateNewCustomer(reqParams)
      if (response.status === 200) {
        setLoading(false)
        setMessage(response.data['message'])
        setStage(3)
      }
    } catch (err) {
      console.log(err)
      setLoading(false)
    }
  }, [otp, verifyDetails])

  const verifyNewRequest = useCallback(async () => {
    try {
      const reqParams = {
        mobileNumber: mobileNumber,
        emailId: emailId,
      }
      setLoading(true)
      const response = await NewCustomerService.customerCreateOtpGenerate(reqParams)
      if (response.status === 200) {
        setLoading(false)
        setVerifyDetails(response.data)
        setStage(2)
      }
    } catch (err) {
      setLoading(false)
    }
  }, [])

  function renderSwitch() {
    switch (stage) {
      case 1:
        return renderConfirm()
      case 2:
        return (
          <div className='new-design-form-style' style={{ margin: '0 auto' }}>
            {/* <div className='otp-wrapper'>
              <OtpInput
                className='otp-input'
                value={otp}
                shouldAutoFocus={true}
                onChange={(otp) => setOtp(otp)}
                numInputs={6}
                isInputNum={true}
                isInputSecure={true}
              />
            </div> */}
            <NeoOTP
              otp={otp}
              numInputs={'6'}
              setOTP={setOtp}
              onSubmit={onConfirm}
              loading={loading}
            />
          </div>
        )
      case 3:
        return (
          <div className='new-design-form-style' style={{ margin: '0 auto' }}>
            <NeoSuccess message={message} linkPath='/login' />
          </div>
        )
      default:
        return renderConfirm()
    }
  }

  function renderConfirm() {
    return (
      <div className='customer-confirm'>
        <h3>Confirmation</h3>
        <p>Please confirm the details </p>

        <Card title='Identity Information' style={{ marginBottom: 30 }}>
          <div className='row'>
            <div className='col-4'>
              <label>Identity Type</label>
              <span>{identityInfo['name']}</span>
            </div>

            <div className='col-4'>
              <label>Identity Number</label>
              <span>{identityInfo['identityNumber']}</span>
            </div>
            <div className='col-4'>
              <label>Issue Date</label>
              <span>
                {identityInfo['issueDate'] !== null
                  ? moment(identityInfo['issueDate']).format('YYYY-MM-DD')
                  : '-'}
              </span>
            </div>

            <div className='col-4'>
              <label>Expiry Date</label>
              <span>
                {identityInfo['expiryDate'] !== null
                  ? moment(identityInfo['expiryDate']).format('YYYY-MM-DD')
                  : '-'}
              </span>
            </div>
            <div className='col-4'>
              <label>Country Of Issue</label>
              <span>{identityInfo['countryOfIssuance'] || '-'}</span>
            </div>
          </div>
        </Card>

        <Card title='Basic Information' style={{ marginBottom: 30 }}>
          <div className='row'>
            <div className='col-2'>
              <label>Title</label>
              <span>
                {(props.masterData['NAMEPREFIX'] &&
                  props.masterData['NAMEPREFIX'].filter(
                    (ele) => ele.id === basicInfo['namePrefix'],
                  )[0].name) ||
                  '-'}
              </span>
            </div>

            <div className='col-3'>
              <label>First Name</label>
              <span>{basicInfo['firstName']}</span>
            </div>
            <div className='col-3'>
              <label>Middle Name</label>
              <span>{basicInfo['middleName'] || '-'}</span>
            </div>

            <div className='col-3'>
              <label>Last Name</label>
              <span>{basicInfo['lastName']}</span>
            </div>
            <div className='col-3'>
              <label>Date Of Birth</label>
              <span>
                {' '}
                {basicInfo['dateOfBirth'] !== null
                  ? moment(basicInfo['dateOfBirth']).format('YYYY-MM-DD')
                  : '-'}
              </span>
            </div>

            <div className='col-3'>
              <label>Place Of Birth</label>
              <span>{basicInfo['placeOfBirth']}</span>
            </div>
            <div className='col-3'>
              <label>Gender</label>
              <span>
                {(props.masterData['GENDER'] &&
                  props.masterData['GENDER'].filter(
                    (ele) => ele.id === basicInfo['gender'],
                  )[0].name) ||
                  '-'}
              </span>
            </div>

            <div className='col-3'>
              <label>Marital Status</label>
              <span>
                {(props.masterData['MARITALSTATUS'] &&
                  props.masterData['MARITALSTATUS'].filter(
                    (ele) => ele.id === basicInfo['maritalStatus'],
                  )[0].name) ||
                  '-'}
              </span>
             
            </div>
            <div className='col-3'>
              <label>Email Id</label>
              <span>{emailId}</span>
            </div>

            <div className='col-3'>
              <label>Mobile Number</label>
              <span>{mobileNumber}</span>
            </div>

            <div className='col-3'>
              <label>Occupation</label>
              <span>
                {(props.masterData['OCCUPATION'] &&
                  props.masterData['OCCUPATION'].filter(
                    (ele) => ele.id === basicInfo['stringoccupationType'],
                  )[0].name) ||
                  '-'}
              </span>
            </div>

            <div className='col-3'>
              <label>Nationality</label>
              <span>{basicInfo['nationality']}</span>
            </div>
          </div>
        </Card>

        <Card title='Address Information' style={{ marginBottom: 30 }}>
          <div className='row'>
            <div className='col-4'>
              <label>House Number / Floor</label>
              <span>{addressInfo['houseNumber']}</span>
            </div>

            <div className='col-4'>
              <label> Address Line1</label>
              <span>{addressInfo['addrLine1']}</span>
            </div>
            <div className='col-4'>
              <label> Address Line2</label>
              <span>{addressInfo['addrLine2']}</span>
            </div>

            <div className='col-3'>
              <label> City</label>
              <span>{addressInfo['city']}</span>
            </div>

            <div className='col-3'>
              <label> Disrtict</label>
              <span>{addressInfo['district']}</span>
            </div>

            <div className='col-3'>
              <label> State</label>
              <span>{addressInfo['state']}</span>
            </div>

            <div className='col-3'>
              <label> Pincode</label>
              <span>{addressInfo['pinCode']}</span>
            </div>
          </div>
        </Card>
        <h4>Proof Of Documents</h4>
        <div className='row'>
          <div className='col-4'>
            <Image src={selfieImage} height={200} />
          </div>

          <div className='col-4'>
            <Image src={frontImage} height={200} />
          </div>

          <div className='col-4'>
            <Image src={backImage} height={200} />
          </div>

          <div className='col-4' style={{ marginTop: 30 }}>
            <Image src={signature} height={200} />
          </div>
        </div>

        {/* <div className='row'>
          <div className='col-2'>
            <label>Title</label>
            <span>{familyInfo['fatherNamePrefix']}</span>
          </div>

          <div className='col-3'>
            <label>Father First Name</label>
            <span>{familyInfo['fatherFirstName']}</span>
          </div>
          <div className='col-3'>
            <label>Father Middle Name</label>
            <span>{familyInfo['fatherMiddleName']}</span>
          </div>

          <div className='col-4'>
            <label>Father Last Name</label>
            <span>{familyInfo['fatherLastName']}</span>
          </div>

          <div className='col-2'>
            <label>Title</label>
            <span>{familyInfo['motherNamePrefix']}</span>
          </div>

          <div className='col-3'>
            <label>Mother First Name</label>
            <span>{familyInfo['motherFirstName']}</span>
          </div>
          <div className='col-3'>
            <label>Mother Middle Name</label>
            <span>{familyInfo['motherMiddleName']}</span>
          </div>

          <div className='col-4'>
            <label>Mother Last Name</label>
            <span>{familyInfo['motherLastName']}</span>
          </div>
        </div> */}

        {/* <h4>Spouse Details</h4>

        <div className='row'>
          <div className='col-2'>
            <label>Title</label>
            <span>{familyInfo['spouseNamePrefix']}</span>
          </div>

          <div className='col-3'>
            <label> First Name</label>
            <span>{familyInfo['spouseFirstName']}</span>
          </div>
          <div className='col-3'>
            <label> Middle Name</label>
            <span>{familyInfo['spouseMiddleName']}</span>
          </div>

          <div className='col-4'>
            <label> Last Name</label>
            <span>{familyInfo['spouseLastName']}</span>
          </div>
        </div> */}

        <div className='footer-btn-style'>
          <Button onClick={() => props.onBack()} size='large' style={{ marginRight: 30 }}>
            Back
          </Button>
          <Button loading={loading} onClick={() => verifyNewRequest()} size='large' type='primary'>
            Next
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div>{renderSwitch()}</div>
    </div>
  )
}
