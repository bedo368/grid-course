import React from "react"
import "./RealTours.scss"
import rator1 from "../../img/realtor-1.jpeg"
import rator2 from "../../img/realtor-2.jpeg"
import rator3 from "../../img/realtor-3.jpeg"
const RealTours = () => {
  return (
    <div className="realtours">
      <p>top 3 real tours</p>
      <div className="relators">
        <div className="relator">
          <img src={rator1} alt="" className="relator-img" />
          <div className="info">
            <div className="name">Toby Ramsey</div>
            <p className="num-of-house">198 HOUSES SOLD</p>
          </div>
        </div>

        <div className="relator">
          <img src={rator2} alt="" className="relator-img" />
          <div className="info">
            <div className="name">Erik Feinman</div>
            <p className="num-of-house">245 HOUSES SOLD</p>
          </div>
        </div>

        <div className="relator">
          <img src={rator3} alt="" className="relator-img" />
          <div className="info">
            <div className="name">Kim Brown</div>
            <p className="num-of-house">212 HOUSES SOLD</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RealTours
