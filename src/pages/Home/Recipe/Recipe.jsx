// eslint-disable-next-line no-unused-vars
import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Recipe = ({ category }) => {
  const { id, name, url,likes, description,experience,numberOfRecipes } = category;
  console.log(category);
  return (
    <div>
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src={url} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              {/* <Card.Text>{description}</Card.Text> */}
              <p><small>Experienc: {experience}</small></p>
              <p><small>Number of recipes: {numberOfRecipes}</small></p>
              <p><small>Likes: {likes}</small></p>
              <Link to="/recipe"><Button>View Recipe</Button></Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
    </div>
  );
};

export default Recipe;
