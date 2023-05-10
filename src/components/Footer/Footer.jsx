import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { Logo } from "../../assets/constant";
import "./footer.css";
import Link from "antd/es/typography/Link";
import Icon from "@ant-design/icons/lib/components/Icon";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="logo-footer">
          <img src={Logo} width={150} alt="" />
          <h3>Pearhiasan</h3>
        </div>
        <div className="Navigation">
          <h2 style={{ color: "rgb(229 231 235)" }}>Navigation</h2>
          <h4>
            With this website selling trinkets, a person or an entrepreneur can
            reduce the operational costs that must be incurred to open a
            physical store.
          </h4>
        </div>
        <div className="Navigation">
          <h2>Navigation</h2>
          <h3>Nfirza</h3>
          <p>
          Bulustalan IV
          Semarang, 50246
          Jawa Tengah
          </p>
          <ul>
            <li className="navigation-sosmed">
              <Link
                href="https://www.facebook.com"
                style={{ marginRight: "10px" }}
              >
                <Icon type="facebook" />
                <FacebookOutlined />
              </Link>
              <Link
                href="https://www.instagram.com"
                style={{ marginRight: "10px" }}
              >
                <Icon type="instagram" />
                <InstagramOutlined />
              </Link>
              <Link
                href="https://twitter.com/Nfirzaa14"
                style={{ marginRight: "10px" }}
              >
                <Icon type="twitter" />
                <TwitterOutlined />
              </Link>
              <Link
                href="https://web.whatsapp.com/"
                style={{ marginRight: "10px" }}
              >
                <Icon type="whatsapp" />
                <WhatsAppOutlined />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
