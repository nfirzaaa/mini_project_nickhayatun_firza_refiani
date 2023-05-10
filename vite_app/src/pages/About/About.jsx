import "./about.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Logo } from "../../assets/constant";
// import { Col, Row } from "antd";

const About = () => {
  return (
    <div>
      <Navbar />

      <div className="hero-wrapper">
        <div className="image">
          <img src={Logo} alt="" />
          <h3>Pearhiasan</h3>
        </div>
        <div className="desc-about">
          <h3>
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
          </h3>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
