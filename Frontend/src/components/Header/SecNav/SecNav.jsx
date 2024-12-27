import "./SecNav.css";
import Western from "../../../assets/Nav pic/Western.png";
import Ethnic from "../../../assets/Nav pic/ethnic wear.png";
import Bottom from "../../../assets/Nav pic/Bottom wear.png";
import party from "../../../assets/Nav pic/party.png";
import Night from "../../../assets/Nav pic/nightwear.png";
import inner from "../../../assets/Nav pic/inner.png";
import { Link } from "react-router-dom";

export const SecNav = () => {
  return (
    <div>
      <nav className="secondary-navbar">
        {/* Western Dropdown */}
        <div className="menu-item">
          <Link to="/Casual-wear/tops">
            <img src={Western} alt="Casual-wear" />
            Casual wears
          </Link>
          <div className="dropdown-menu">
            <Link to="/Casual-wear/SideOpenTop"> Side open tops</Link>
            <Link to="/Casual-wear/Anarkali">Anarkali tops</Link>
            <Link to="/Casual-wear/PieceSets">2 and 3 piece sets</Link>
            <Link to="/Casual-wear/duppatta">Duppatta</Link>
          </div>
        </div>

        {/* Kids Dropdown */}
        <div className="menu-item">
          <a href="/bottom">
            <img src={Bottom} alt="Kids" />
            Bottom Wear
          </a>
          <div className="dropdown-menu">
            <h4>
              <Link to="/bottom/leggings">Leggings Ankle,3/4th,full</Link>
              <Link to="/bottom/Patiala">Patiala</Link>
              <Link to="/bottom/Plazzo">Plazzo</Link>
              <Link to="/bottom/straightPant">Straight pant</Link>
              <Link to="/bottom/CigarPant">Cigar pant</Link>
              <Link to="/bottom/Skirt">Skirt</Link>
            </h4>
          </div>
        </div>

        {/* All Women Ethnic Dropdown */}
        <div className="menu-item">
          <a href="/ethnic">
            <img src={Ethnic} alt="ethnic" />
            Ethnic Wear
          </a>
          <div className="dropdown-menu">
            <h4>
              <a href="/ethnic/duppatta">designer anarkali tops</a>
              <a href="/ethnic/straigth">designer side open tops</a>
              <a href="/ethnic/cigar">designer duppatta</a>
              <a href="/ethnic/ready">2 and 3 piece sets </a>
            </h4>
          </div>
        </div>

  {/* Nigth Wear */}
  <div className="menu-item">
  <a href="/party">
    <img src={Night} alt="night" />
    Night Wear
  </a>
  <div className="dropdown-menu">
    <h4>
      <a href="/night/nighty">Nighty</a>
      <a href="/night/night">Night Suit</a>
      <a href="/night/night">T-shirt’s</a>
      <a href="/night/night">track pants</a>
    </h4>
    </div>
  </div>

    {/* inner wear */}
    <div className="menu-item">
  <a href="/inner">
    <img src={inner} alt="inner" />
    Inner Wear
  </a>
  <div className="dropdown-menu">
    <h4>
      <a href="/inner/bra">Bra</a>
      <a href="/inner/briefs">panties</a>
      <a href="/inner/briefs">slips</a>
      <a href="/inner/briefs">nighty slip</a>
      <a href="/inner/briefs">slips</a>
      <a href="/inner/briefs">Bra’s attached slips</a>
    </h4>
    </div>
  </div>


        {/* Party wear */}
    <div className="menu-item">
  <a href="/party">
    <img src={party} alt="party" />
    Party Wear
  </a>
  <div className="dropdown-menu">
    <h4>
      <a href="/party/shimmers">Shimmers</a>
    </h4>
    </div>
  </div>
      </nav>
    </div>
  );
};
