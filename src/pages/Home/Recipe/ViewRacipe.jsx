import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, ListGroup } from "react-bootstrap";

const ViewRacipe = () => {
  const id = useParams();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setRecipes(data.find((detail) => detail.id === id.id)))
      .catch((error) => console.error(error));
  }, []);

  console.log(recipes)

  return (
    <Card className="mx-auto mt-5" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={recipes.url} />
      <Card.Body>
        <Card.Title>{recipes.name}</Card.Title>
        <Card.Text>
          {recipes.methodOfCookies && recipes.methodOfCookies}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{recipes.rating}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Favourite</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default ViewRacipe;
