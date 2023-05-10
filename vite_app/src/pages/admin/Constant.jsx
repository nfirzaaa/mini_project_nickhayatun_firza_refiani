import { Button, Space } from "antd";

export const columns = [
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
        render: () => (
            <Space size="middle">
                <Button onClick="" type="primary">
                    Edit
                </Button>
                <Button onClick="" danger>
                    Delete
                </Button>
            </Space>
        ),
    },
];
export const data = [
    {
        key: "1",
        no: 1,
        name: "Makanan Sehat",
        price: "Rp. 2.000.000",
        stock: 90,
        date: "11 Januari 2023",
    },
];
