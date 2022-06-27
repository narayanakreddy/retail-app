import React, { useCallback, useEffect, useState } from "react";
import { Button, Input, Form } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import AuthService from "../../services/auth.service";

export default function LoginComponent() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "USER_LOGOUT" });
  }, []);

  const postLogin = useCallback(async (values) => {
    try {
      setLoading(true);
      const response = await AuthService.postLogin(values);
      setLoading(false);
      if (response.data["otpEnable"]) {
        navigate("/verifyOtp");
      } else {
        navigate("/dashboard");
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
          name="verifyEmailForm"
          layout="vertical"
          requiredMark={false}
          onFinish={postLogin}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Required Field" }]}
          >
            <Input size="large" placeholder="Username" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Required Field" }]}
          >
            <Input.Password
              size="large"
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Button
            block
            size="large"
            className="solid-btn-style"
            type="primary"
            htmlType="submit"
            loading={loading}
          >
            Login
          </Button>

          <Button
            block
            size="large"
            type="default"
            htmlType="button"
            className="solid-btn-style"
            onClick={() => navigate("/signUp")}
          >
            Create An Account
          </Button>
        </Form>
      </div>
    </>
  );
}
