import "./style.css";
import { Logo } from "../../assets/constant";
import { navigation } from "../Footer/constant";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={Logo} width={30} alt="Logo" />
                <p>Pearlhiasan</p>
            </div>
            <ul>
                {navigation.map((d, i) => (
                    <li key={i} className="nav-link">
                        <a href={d.href} style={{fontSize : 16}}>{d.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;
