import React from "react"
import "./HomeCard.scss"
import { ReactComponent as HartImg } from "../../svg/heart.svg"
import { ReactComponent as Location } from "../../svg/pin.svg"
import { ReactComponent as Area } from "../../svg/edit.svg"
import { ReactComponent as Person } from "../../svg/user.svg"
import { ReactComponent as Key } from "../../svg/key.svg"

const HomeCard = ({name , location , img , price , area , romes }) => {
  return (
    <div className="home-card">
      <img src={img} alt="" className="img" />
      <HartImg className="icon" />
      <h5 className="name">{name}</h5>
      <div className="location mg-sb">
        <Location className="romes__icon" />
        <p>{location}</p>
      </div>
      <div className="romes mg-sb">
        <Person className="location__icon" />
        <p>{romes} Romes </p>
      </div>
      <div className="area mg-sb">
        <Area className="area__icon" />
        <p>{area} m<sup>2</sup></p>
      </div>
      <div className="price mg-sb">
        <Key className="price__icon" />
        <p>${price}</p>
      </div>
      <button className="btn ">contact us now</button>
    </div>
  )
}

export default HomeCard
