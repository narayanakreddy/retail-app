import React, { useCallback, useEffect, useState } from "react";
import { Button, Input, Form } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import AuthService from "../../services/auth.service";

export default function VerifyOtpComponent() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const postLogin = useCallback(async (values) => {
    try {
      setLoading(true);
      const response = await AuthService.postLogin(values);
      if (response.status === 200) {
        setLoading(false);
        if (response.data["otpEnable"]) {
          navigate("/verifyOtp");
        } else {
          navigate("/dashboard");
        }
      }
    } catch (err) {
      setLoading(false);
    }
  }, []);

  return (
    <>
      <h4>Login in to your account</h4>
      <div className="auth-content-area">
        <Form
          name="verifyOtpForm"
          layout="vertical"
          requiredMark={false}
          onFinish={postLogin}
        >
          <Form.Item
            label="Otp"
            name="otp"
            rules={[{ required: true, message: "Required Field" }]}
          >
            <Input size="large" placeholder="Enter Otp" />
          </Form.Item>
          <Button
            block
            size="large"
            className="solid-btn-style"
            type="primary"
            htmlType="submit"
            loading={loading}
          >
            Submit
          </Button>

<p></p>
        </Form>
      </div>
    </>
  );
}
