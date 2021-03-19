import React from "react"
import "./StoryP.scss"
import image1 from "../../img/story-1.jpeg"
import image2 from "../../img/story-2.jpeg"
const StoryP = () => {
  return (
    <div className="story__pectures">
      <img src={image1} alt="" className="img--1" />
      <img src={image2} alt="" className="img--2" />
    </div>
  )
}

export default StoryP
