import "./SecNav.css";
import Western from "../../../assets/Nav pic/Western.png";
import Ethnic from "../../../assets/Nav pic/ethnic wear.png";
import Bottom from "../../../assets/Nav pic/Bottom wear.png";
import party from "../../../assets/Nav pic/party.png";
import Night from "../../../assets/Nav pic/nightwear.png";
import inner from "../../../assets/Nav pic/inner.png";

export const SecNav = () => {
  return (
    <div>
      <nav className="secondary-navbar">
        {/* Western Dropdown */}
        <div className="menu-item">
          <a href="/women-western">
            <img src={Western} alt="Women Western" />
            Women Western
          </a>
          <div className="dropdown-menu">
            <a href="/women-western/tops"> T-Shirts</a>
            <a href="/women-western/dresses">Skirts</a>
            <a href="/women-western/jeans">Jeans</a>
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
              <a href="/bottom/angle">Ankle Leggings</a>
              <a href="/bottom/straight">Straight Pant</a>
              <a href="/bottom/cigar">Cigar Pant</a>
              <a href="/bottom/length">Full-Length Leggings</a>
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
              <a href="ethnic/sideopentop">Side Open Tops</a>
              <a href="/ethnic/anarkali">Anarkali Tops</a>
              <a href="/ethnic/palazzo">Palazzo’s</a>
              <a href="/ethnic/duppatta">Duppatta</a>
              <a href="/ethnic/straigth">Straight Pant</a>
              <a href="/ethnic/cigar">Cigar Pant</a>
              <a href="/ethnic/ready">Ready-Made Blouses</a>
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
      <a href="/inner/briefs">Briefs</a>
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
