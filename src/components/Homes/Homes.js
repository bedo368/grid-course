import React from "react"
import HomeCard from "../HomeCard/HomeCard"
import "./homes.scss"
import img1 from "../../img/house-1.jpeg"
import img2 from "../../img/house-2.jpeg"
import img3 from "../../img/house-3.jpeg"
import img4 from "../../img/house-4.jpeg"
import img5 from "../../img/house-5.jpeg"
import img6 from "../../img/house-6.jpeg"
const Homes = () => {
  return (
    <div className="homes">
      <HomeCard
        img={img1}
        location="USA"
        name="Beautiful Familiy House"
        romes="5"
        area="325"
        price="1,250,000"
      />
      <HomeCard
        img={img2}
        location="Canada"
        name="Modern Glass Villa"
        romes="6"
        area="450"
        price="1,450,000"

      />
      <HomeCard
        img={img3}
        location="Portugal"
        name="Cozy Country House"
        romes="4"
        area="250"
        price="950,000"

      />
      <HomeCard
        img={img4}
        location="Germany"
        name="Large Rustical Villa"
        romes="6"
        area="535"
        price="1,350,000"

      />
      <HomeCard
        img={img5}
        location="Italy"
        name="Majestic Palace House"
        romes="18"
        area="1225"
        price="9,450,000"

      />
      <HomeCard
        img={img6}
        location="UK"
        name="Modern Familiy Apartment"
        romes="3"
        area="180"
        price="450,000"

      />
    </div>
  )
}

export default Homes
