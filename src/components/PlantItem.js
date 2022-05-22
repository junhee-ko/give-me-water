import React from "react";
import GiveMeWaterModal from "./GiveMeWaterModal";

const PlantItem = ({plant}) => {

  return (
    <div className="item">
      <div className="ui small image">
        <img alt={plant.name} src={plant.imageUrl}/>
      </div>

      <div className="middle aligned content">
        <div className="header">
          {plant.name}
        </div>
        <div className="description">
          <p>물 주는 날 D-{plant.dDays}</p>
        </div>
        <div className="extra">
          <div className="right floated">
            <GiveMeWaterModal/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default PlantItem
