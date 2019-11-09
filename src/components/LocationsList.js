import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";

export default function LocationsList() {
    const [locations, setLocations] = useState([]);
    useEffect(() => {
        axios
          .get("https://rickandmortyapi.com/api/character/")
    
          .then(res => {
            console.log(res);
            setLocations(res.data.location)
          })
    
          .catch(error => {
            console.log("Error: ", error);
          })
    
      }, []);
    return (
      <section>
      {locations.map(location => (
        <LocationCard key={location.id} name={location.name} type={location.type}>
        </LocationCard>
        ))}
      </section>
    )
}
