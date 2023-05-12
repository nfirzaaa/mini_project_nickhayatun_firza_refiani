import {
  InboxOutlined,
  SnippetsOutlined,
  DollarOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import {
  Button,
  Form,
  Input,
  Layout,
  Modal,
  Popconfirm,
  Space,
  Upload,
  message,
} from "antd";
import { Table } from "antd";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import { useEffect, useState } from "react";
import { useSingleUploader } from "../../hooks/useSingleUploader";
import { uploaderConfig } from "../../config/uploaderConfig";
import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  GET_PRODUCT,
  UPDATE_PRODUCT,
} from "./query";
import { useMutation, useQuery } from "@apollo/client";
import { useForm } from "antd/es/form/Form";

const Dashboard = () => {
  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState("");
  const [urlImage, setUrlImage] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [rowData, setRowData] = useState();
  const [isLoadingUpload, uploadFile] = useSingleUploader();
  const [form] = useForm();

  if (!token) {
    navigate("/admin");
  }

  const { data: product } = useQuery(GET_PRODUCT);

  const [updateProduct, { loading: loadingUpdateProduct }] = useMutation(
    UPDATE_PRODUCT,
    {
      refetchQueries: [GET_PRODUCT],
    }
  );

  const handleEdit = (row_data) => {
    form.setFieldValue("name", row_data.product_name);
    form.setFieldValue("price", row_data.price);
    form.setFieldValue("stock", row_data.quantity);
    setRowData(row_data);
    setIsEdit(true);
    setAvatar(row_data.url);
  };

  const handleCancel = () => {
    setAvatar("");
    setRowData();
    setIsEdit(false);
  };

  const onEdit = (values) => {
    const id = rowData.id;
    updateProduct({
      variables: {
        pk_columns: { id: id },
        _set: {
          product_name: values.name,
          price: values.price,
          quantity: values.quantity,
          url: urlImage,
        },
      },
      onCompleted: () => {
        form.resetFields();
        setAvatar("");
        handleCancel();
      },
      onError: (err) => {
        message.open({
          type: "error",
          content: `${err?.message}`,
        });
      },
    });
  };

  const handleUpload = async (file) => {
    const body = {
      file: await getBase64(file.file.originFileObj),
      upload_preset: uploaderConfig.upload_preset,
      public_id: file.file.name.replace(/\.[^.]*$/, ""),
      api_key: uploaderConfig.api_key,
    };

    uploadFile(body, (data) => {
      setAvatar(data.url);
      setUrlImage(data.url);
    });
  };

  const id = new Date().getTime();
  const [addProduct, { loading: loading }] = useMutation(ADD_PRODUCT, {
    refetchQueries: [GET_PRODUCT],
  });

  const onUpload = (values) => {
    addProduct({
      variables: {
        object: {
          id,
          price: values.price,
          product_name: values.name,
          quantity: values.stock,
          url: urlImage,
        },
      },
      onError: (err) => {
        message.open({
          type: "error",
          content: `${err?.message}`,
        });
      },
      onCompleted: () => {
        form.resetFields();
        setAvatar("");
        Modal.success({
          title: "Product Added!",
          content: "Please check your product",
          centered: true,
          onOk() {
            navigate("/dashboard");
          },
        });
      },
    });
  };

  const [deleteProduct] = useMutation(DELETE_PRODUCT, {
    refetchQueries: [GET_PRODUCT],
  });

  const onDelete = (row_id) => {
    deleteProduct({
      variables: { id: row_id },
      onError: (err) => {
        message.open({
          type: "error",
          content: `${err?.message}`,
        });
      },
    });
  };

  const columnsTable = [
    {
      title: "Product Name",
      dataIndex: "product_name",
      key: "product_name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Stock",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Image",
      key: "url",
      dataIndex: "url",
      render: (_, record, index) => (
        <img
          src={record.url}
          alt={`record-${index}`}
          style={{ width: "40px", height: "40px" }}
        />
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => handleEdit(record)} type="primary">
            Edit
          </Button>
          <Popconfirm
            title="Are you sure to delete?"
            arrow={false}
            onConfirm={() => onDelete(record.id)}
          >
            <Button onClick="" danger>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  useEffect(() => {
    if (!token) navigate("/login");
  }, []);

  const { Footer } = Layout;

  return (
    <div className="wrapper-dashboard">
      <div className="">
        <div className="header-login">
          <h2>{isEdit ? "Edit Product" : "Add Product"}</h2>
        </div>
        <Form
          form={form}
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={isEdit ? onEdit : onUpload}
        >
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "Please input Product Name",
              },
            ]}
          >
            <Input
              prefix={<SnippetsOutlined className="site-form-item-icon" />}
              placeholder="Product Name"
            />
          </Form.Item>
          <Form.Item
            name="price"
            rules={[
              {
                required: true,
                message: "Please input Product Price",
              },
            ]}
          >
            <Input
              prefix={<DollarOutlined className="site-form-item-icon" />}
              type="number"
              placeholder="Product Price"
            />
          </Form.Item>
          <Form.Item
            name="stock"
            rules={[
              {
                required: true,
                message: "Please input Product Stock",
              },
            ]}
          >
            <Input
              prefix={<InboxOutlined className="site-form-item-icon" />}
              type="number"
              placeholder="Product Stock"
            />
          </Form.Item>
          <Form.Item label="Product Image" getValueFromEvent={normFile}>
            <Upload
              name="file"
              showUploadList={false}
              maxCount={1}
              onRemove={() => {
                setAvatar("");
              }}
              customRequest={() => {}}
              onChange={handleUpload}
            >
              <Button
                icon={<UploadOutlined />}
                type={!avatar ? "dashed" : "default"}
              >
                {avatar ? "Change Image" : "Product Image"}
              </Button>
            </Upload>

            {isLoadingUpload ? (
              <Loading />
            ) : (
              avatar && (
                <div style={{ marginTop: 20 }}>
                  <img
                    src={avatar}
                    alt="avatar"
                    style={{
                      height: "150px",

                      borderRadius: "10px",
                    }}
                  />
                </div>
              )
            )}
          </Form.Item>

          {isEdit ? (
            <Space>
              <Button
                type="primary"
                htmlType="submit"
                loading={loadingUpdateProduct}
              >
                Save
              </Button>
              <Button type="primary" danger onClick={handleCancel}>
                Cancel
              </Button>
            </Space>
          ) : (
            <Button
              style={{ marginBottom: 30 }}
              type="primary"
              htmlType="submit"
              className="login-form-button"
              loading={loading}
            >
              Submit
            </Button>
          )}
        </Form>
      </div>
      <Table
        columns={columnsTable}
        dataSource={product?.site_admin}
        rowKey="id"
        style={{ marginLeft: 20 }}
      />
      <Button
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          background: "red",
          color: "white",
        }}
        onClick={() => {
          localStorage.setItem("token", false);
          navigate("/admin");
        }}
      >
        Logout
      </Button>
      <Layout style={{height: 10}}>
        <Footer style={{ textAlign: "center", fontSize: "12px" }}>
          &copy; Copyright by @nfirzaar
        </Footer>
      </Layout>
    </div>
  );
};

export default Dashboard;
