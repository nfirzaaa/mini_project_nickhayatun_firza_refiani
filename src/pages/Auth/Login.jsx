import "./auth.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useQuery } from "@apollo/client";
import { Button, Checkbox, Form, Input, Modal } from "antd";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { GET_PROFILE } from "./query.jsx/profileQuery";

const Login = () => {
    const navigate = useNavigate();
    const { data: admin, loading: loadingProfile } = useQuery(GET_PROFILE);

    const onLogin = (values) => {
        const isVerified = admin.admin.find(
            (a) => a.username === values.username
        );

        if (isVerified) {
            localStorage.setItem("token", true);
            navigate("/dashboard");
        } else {
            Modal.warning({
                title: "Login Failed!",
                content: "Username/password is not correct",
                centered: true,
                onOk() {
                    <Navigate to={"/login"} />;
                },
            });
        }
    };

    return (
        <div className="wrapper-login">
            <div className="">
                <div className="header-login">
                    <h2>LOGIN</h2>
                </div>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onLogin}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Username!",
                            },
                        ]}
                    >
                        <Input
                            prefix={
                                <UserOutlined className="site-form-item-icon" />
                            }
                            placeholder="Username"
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Password!",
                            },
                        ]}
                    >
                        <Input
                            prefix={
                                <LockOutlined className="site-form-item-icon" />
                            }
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        {/* <Form.Item
                            name="remember"
                            valuePropName="checked"
                            noStyle
                        >
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item> */}

                        <Link
                            to="/register"
                            className="login-form-forgot"
                            href=""
                        >
                            Register Here
                        </Link>
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                            disabled={loadingProfile}
                        >
                            LOGIN
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Login;
