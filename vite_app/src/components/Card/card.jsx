import { Card, Rate } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;

const CardComponents = ({ url, imageUrl, productName, price }) => {
    return (
        <Link to={url} style={{ textDecoration: "none" }}>
            <Card
                hoverable
                bordered={false}
                style={{
                    width: 300,
                }}
                cover={
                    <img
                        alt="product image"
                        src={imageUrl}
                        style={{ width: "300px", height: "200px" }}
                    />
                }
            >
                <Meta title={productName} description={price} />
                <div className="" style={{ width: "80%" }}>
                    <Rate value={4.5} allowHalf style={{ margin: 0 }} />
                </div>
            </Card>
        </Link>
    );
};

export default CardComponents;
