import React from "react";
import { Card, CardBody, CardTitle, CardText} from "reactstrap";


export default function LocationCard( { name, type, dimension, residents }) {
  return (
    <Card key={props.id}>
            <CardBody>
              <CardTitle>Name: {props.name}</CardTitle>
              <CardText>Type: {props.type}</CardText>
            </CardBody>
        </Card>
  )
}
