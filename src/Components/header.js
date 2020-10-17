import React from "react";
import logo from './images/logo.png'
import {ReactNavbar} from "react-responsive-animate-navbar";
import './nav.css'
function Header() {
  return (
    <div className='nav'>
      <ReactNavbar
        color="rgb(0,0,0)"
        logo={logo}
        menu={[
          { name: "HOME", to: "/" },
          { name: "ARTICLES", to: "/articles" },
          { name: "ABOUT ME", to: "/about" },
          { name: "CONTACT", to: "/contact" },
        ]}
        social={[
          {
            name: "GitHub",
            url: "https://github.com/daniyal8",
            icon: ["fab", "github"],
          },
          {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/daniyal-sadiq-5767161b6/",
            icon: ["fab", "linkedin-in"],
          },
          {
            name: "Facebook",
            url: "https://www.facebook.com/daniyal.sadiq.1840",
            icon: ["fab", "facebook-f"],
          },
          {
            name: "Instagram",
            url: "https://www.instagram.com/daniyalsadiq21/",
            icon: ["fab", "instagram"],
          },
          {
            name: "Twitter",
            url: "https://twitter.com/DaniyalSadiq9",
            icon: ["fab", "twitter"],
          },
        ]}
      />
    </div>
  );
}

export default Header;
