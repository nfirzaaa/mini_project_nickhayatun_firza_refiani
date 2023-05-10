import "./product.css";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { product } from "../Home/constant";
import { WhatsAppOutlined } from "@ant-design/icons";

const Product = () => {
    const params = useParams();
    const detailProduct = product.filter((d) => d.id == params.id);

    return (
        <div>
            <Navbar />
            <div className="wrapper-detail">
                <div className="thumbnail">
                    <img src={detailProduct[0].image} alt="" />
                </div>
                <div className="desc">
                    <h1>{detailProduct[0].name}</h1>
                    <div className="detail">
                        <div className="display">
                            <h3>Price : {detailProduct[0].price}</h3>
                            <p>Stock : {detailProduct[0].quantity}</p>
                            <p>Desc :</p>
                            <p className="desc-product">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Dolorum dicta tenetur cumque
                                repellat qui nemo molestias natus cupiditate
                                enim possimus.
                            </p>
                        </div>
                        <div className="order">
                            <h2 style={{ textAlign: "center" }}>Buy Now</h2>
                            <a href="https://wa.link/xsryr3">
                                <button className="btn-buy">
                                    <WhatsAppOutlined className="icon" />
                                    Buy
                                </button>
                            </a>{" "}
                            <br />
                            <button className="btn-fav">Favorite</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Product;
