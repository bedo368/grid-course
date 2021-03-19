import React from "react"
import "./Featurs.scss"
import { ReactComponent as WorledIcon } from "../../svg/globe.svg"
import { ReactComponent as KeyIcon } from "../../svg/key.svg"
import { ReactComponent as CupIcon } from "../../svg/trophy.svg"
import { ReactComponent as LocationIcon } from "../../svg/pin.svg"
import { ReactComponent as BordIcon } from "../../svg/bar-chart.svg"
import { ReactComponent as LockIcon } from "../../svg/lock.svg"
const Featurs = () => {
  return (
    <section className="features">
      <div className="feature">
        <WorledIcon className="icon" />
        <h4 className="title heading--4">world's best Homes</h4>
        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          numquam voluptates perferendis consequuntur amet, ipsa magni, placeat
        </p>
      </div>
      <div className="feature">
        <KeyIcon className="icon" />
        <h4 className="title heading--4">New home in one week</h4>
        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          numquam voluptates perferendis consequuntur amet, ipsa magni,
        </p>
      </div>
      <div className="feature">
        <CupIcon className="icon" />
        <h4 className="title heading--4">Only the best properties</h4>
        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          numquam voluptates perferendis consequuntur amet, ipsa magni, placeat
          deserunt
        </p>
      </div>
      <div className="feature">
        <LocationIcon className="icon" />
        <h4 className="title heading--4">All homes in in top locations</h4>
        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          numquam voluptates perferendis
        </p>
      </div>
      <div className="feature">
        <BordIcon className="icon" />
        <h4 className="title heading--4">Top 1% realtors</h4>
        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          numquam voluptates perferendis consequuntur
        </p>
      </div>
      <div className="feature">
        <LockIcon className="icon" />
        <h4 className="title heading--4">Secure payments on nexter</h4>
        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          numquam voluptates perferendis consequuntur amet, ipsa magni, placeat
          deserunt iusto
        </p>
      </div>
    </section>
  )
}

export default Featurs
