import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../../assest/navbar/navlogo.png";
import home from "../../assest/navbar/home.svg";
import chart from "../../assest/navbar/chart.svg";
import eq from "../../assest/navbar/eq.svg";
import se from "../../assest/navbar/se.svg";
import play from "../../assest/navbar/play.svg";
import profile from "../../assest/navbar/profie.png";
import StripeCheckout from 'react-stripe-checkout';


import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoIosMenu } from "react-icons/io";
import { VscClose } from "react-icons/vsc";
const Navbar = () => {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  
  const handleLogout = () => {
    localStorage.clear();
    navigate("/authPage");
  };


  const onToken = (token) => {

    console.log('token is',token)
  }
  return (
    <>
      <div className="nav">
        <div className="nav-container">
          <div className="nav-container-logo">
            <Link to="/home">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <nav className="nav-container-nav">
            <div className="nav-container-nav-item">
              <img src={home} alt="home" />
              <div className="nav-container-nav-item-link">
                <Link to="/home">home</Link>
              </div>
            </div>
            <div className="nav-container-nav-item">
              <img src={chart} alt="home" />
              <div className="nav-container-nav-item-link">
                <Link to="/crypto">crypto</Link>
              </div>
            </div>
            <div className="nav-container-nav-item">
              <img src={eq} alt="home" />
              <div className="nav-container-nav-item-link">
                <Link to="/scale">toshi scale</Link>
              </div>
            </div>
            <div className="nav-container-nav-item">
              <img src={se} alt="home" />
              <div className="nav-container-nav-item-link">
                <Link to="/analysis">analysis</Link>
              </div>
            </div>
            <div className="nav-container-nav-item">
              <img src={play} alt="home" />
              <div className="nav-container-nav-item-link">
                <Link to="/video">video</Link>
              </div>
            </div>

            <div className="nav-container-nav-item">
              <img src={play} alt="home" />
              <div className="nav-container-nav-item-link">
              <Link to="/pay">Pay With Card</Link>
              </div>
            </div>
          </nav>
          <div className="nav-container-content">
            <div className="btn-logout">
              <button onClick={() => handleLogout()}>Logout</button>
            </div>
            {/* <div className="nav-container-content-profile">
              <img src={profile} alt="profile" />
            </div> */}
          </div>
        </div>
      </div>

      <div className="responsive-topbar">
        <div className="responsive-topbar-top">
          <div className="responsive-topbar-top-hamburger">
            <Link>
              <IoIosMenu onClick={showSidebar} style={{ color: "#002289" }} />
            </Link>
          </div>
          <div className="responsive-topbar-top-content">
            <div className="btn-logout">
              <button onClick={() => handleLogout()} style={{cursor:"pointer"}}>log out</button>
            </div>
            <div className="responsive-topbar-top-content-profile">
              <img src={profile} alt="profiles" />
            </div>
          </div>
        </div>
        <div className={sidebar ? "" : "res-inactive"}>
          <div className="responsive">
            <div className="responsive-toggle">
              <VscClose onClick={showSidebar} />
            </div>
            <div className="responsive-menu">
              <div className="responsive-menu-item">
                <Link to="/">Home</Link>
              </div>
              <div className="responsive-menu-item">
                <Link to="/crypto">Crypto</Link>
              </div>
              <div className="responsive-menu-item">
                <Link to="/scale">Toshi Scale</Link>
              </div>
              <div className="responsive-menu-item">
                <Link to="/analysis">analysis</Link>
              </div>
              <div className="responsive-menu-item">
                <Link to="/videos">videos</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
