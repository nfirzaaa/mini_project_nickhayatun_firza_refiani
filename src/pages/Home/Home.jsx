import CardComponents from "../../components/Card/card";
import "./home.css";
import Navbar from "../../components/Navbar/Navbar";
import { detailNav } from "../../routes/Link";
import { product } from "./constant";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer/Footer";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT } from "../admin/query";
import { Logo } from "../../assets/constant";

const Home = () => {
  const { data: productData } = useQuery(GET_PRODUCT);
  return (
    <div>
      <Navbar />
      <Carousel />

      <div className="hero-wrapper" id="about">
        <div className="image">
          <img src={Logo} alt="" style={{marginTop: 90}}/>
          <h3>Pearhiasan</h3>
        </div>
        <div className="desc-about">
          <h5>
            Dalam era digital seperti sekarang ini, website penjualan
            pernak-pernik atau e-commerce telah menjadi alternatif yang populer
            bagi pengusaha untuk memasarkan produk mereka. Hal ini dikarenakan
            keuntungan yang dapat diperoleh dari e-commerce, salah satunya
            adalah mengurangi biaya operasional yang harus dikeluarkan untuk
            membuka toko fisik.Selain itu, website penjualan pernak-pernik juga
            memungkinkan pengusaha untuk menjangkau pasar yang lebih luas karena
            dapat diakses dari mana saja dan kapan saja melalui internet. Hal
            ini berbeda dengan toko fisik yang terbatas oleh lokasi dan jam
            buka.
          </h5>
        </div>
      </div>

      <div className="wrapper">
        <h2 style={{ padding: "0 5rem", marginTop: 50}} id="all-products">
          All Products
        </h2>
        <div className="product-wrap">
          {product.map((d, i) => (
            <CardComponents
              key={i}
              url={`product/${detailNav(d.id)}`}
              imageUrl={d.image}
              price={d.price}
              productName={d.name}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
