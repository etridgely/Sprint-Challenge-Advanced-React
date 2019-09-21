import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Card } from 'semantic-ui-react';

const PlayerCard = props => {
    return (
        <Card>
        <Card.Content>
          <Card.Header>{props.name}</Card.Header>
          <Card.Meta>{props.country}</Card.Meta>
          <Card.Description>{props.searches}</Card.Description>
        </Card.Content>  
        </Card>
    );
};

export default PlayerCard;