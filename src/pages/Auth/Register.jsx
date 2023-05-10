import { Button, Form, Input, Modal, message } from "antd";
import "./auth.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { ADD_PROFILE, GET_PROFILE } from "./query.jsx/profileQuery";
import { useMutation, useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const { data: admin, loading: loadingProfile } = useQuery(GET_PROFILE);
    const [register, { loading: loadingRegister }] = useMutation(ADD_PROFILE, {
        refetchQueries: [GET_PROFILE],
    });

    const navigate = useNavigate();

    const onRegister = (values) => {
        const adminData = admin.admin;
        const isExisted = adminData.some(
            (admin) => admin.username === values.username
        );
        if (!isExisted) {
            register({
                variables: {
                    object: {
                        ...values,
                    },
                },
                onError: (err) => {
                    message.open({
                        type: "error",
                        content: `${err?.message}`,
                    });
                },
                onCompleted: () => {
                    Modal.success({
                        title: "Register Success!",
                        content: "Please login using your account",
                        centered: true,
                        onOk() {
                            navigate("/admin");
                        },
                    });
                },
            });
        } else {
            Modal.warning({
                title: "Register Failed!",
                content: "Your username has already been used",
                centered: true,
            });
        }
    };

    return (
        <div className="wrapper-login">
            <div className="">
                <div className="header-login">
                    <h2>REGISTER</h2>
                </div>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onRegister}
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
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                            loading={loadingRegister}
                            disabled={loadingProfile}
                        >
                            REGISTER
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Register;
