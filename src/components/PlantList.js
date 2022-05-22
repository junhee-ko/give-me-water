import React from "react";
import PlantItem from "./PlantItem";

const PlantList = ({plants}) => {

  const renderedPlants = plants.map((plant) => {
      return <PlantItem key={plant.id} plant={plant}/>
    }
  )

  return <div className="ui items">{renderedPlants}</div>

}

export default PlantList
