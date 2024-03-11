import { Button, Card, Col, Form, Input, Row, Typography } from "antd";
import React, { useState } from "react";
import styles from "./Login.module.css";

import { useDispatch } from "react-redux";
import { addUser } from "../../redux/rtk/features/user/userSlice";

import { Navigate } from "react-router";
import { toast } from "react-toastify";
import LoginTable from "../Card/LoginTable";

const Login = () => {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const { Title } = Typography;
  const isLogged = Boolean(localStorage.getItem("isLogged"));

  if (isLogged) {
    return <Navigate to={"/admin/dashboard"} replace={true} />;
  }
  const onFinish = async (values) => {
    const resp = await dispatch(addUser(values));
    if (resp.payload.message === "success") {
      setLoader(false);
      window.localStorage.setItem('token',resp.token)
      window.localStorage.setItem('admintoken',resp.token)
      window.location.href = "/admin/dashboard";
    } else {
      setLoader(false);
    }
  };
  const onFinishFailed = (errorInfo) => {
    setLoader(false);
    toast.error("Error at login Please try again");
  };

  return (
    <>
      <Row className='card-row'>
        <Col span={24}>
          <Card bordered={false} className={styles.card}>
            <Title level={3} className='m-3 text-center'>
              Login
            </Title>
            <Form
              name='basic'
              labelCol={{
                span: 6,
              }}
              wrapperCol={{
                span: 16,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete='off'
            >
              <Form.Item
                className='mb-5'
                label='Username'
                name='userName'
                rules={[
                  {
                    required: true,
                    message: "Please input your userName!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                className='mb-5'
                label='Password'
                name='password'
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item className={styles.submitBtnContainer}>
                <Button
                  type='primary'
                  htmlType='submit'
                  loading={loader}
                  onClick={() => setLoader(true)}
                >
                  Submit
                </Button>
              </Form.Item>
              <Form.Item className={styles.loginTableContainer}>
                <Row>
                  <Col span={24}>
                    <LoginTable />
                  </Col>
                </Row>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Login;
