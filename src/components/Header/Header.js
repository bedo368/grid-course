import React from "react"
import "./Header.scss"
import Logo from "../../img/logo.png"
import img1 from "../../img/logo-bbc.png"
import img2 from "../../img/logo-bi.png"
import img3 from "../../img/logo-forbes.png"
import img4 from "../../img/logo-techcrunch.png"
const Header = () => {
  return (
    <div className="header">
      <img src={Logo} className="logo" />
      <p>YOUR OWN HOME:</p>
      <h2>The ultimate personal freedom</h2>
      <button className="btn header-btn">view your profile</button>
      <div className="seen-on">seen on</div>
      <div className="header-imgs">
        <img src={img1} alt="" className="header-img" />
        <img src={img2} alt="" className="header-img" />
        <img src={img3} alt="" className="header-img" />
        <img src={img4} alt="" className="header-img" />
      </div>
    </div>
  )
}

export default Header
