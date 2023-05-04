import React, { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

import { useParams } from "react-router-dom";
import { Button, Card, ListGroup } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ViewRacipe = () => {
  const id = useParams();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://chef-recipe-food-server-sakibhosen98.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setRecipes(data.find((detail) => detail.id === id.id)))
      .catch((error) => console.error(error));
  }, []);

  console.log(recipes)

  const handleAddToToast = () => {
    toast('Favourite done!!')
  }

  return (
    <Card className="mx-auto mt-5" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={recipes.url} />
      <Card.Body>
        <Card.Title>{recipes.name}</Card.Title>
        <Card.Text>
          {recipes.methodOfCookies && recipes.methodOfCookies}
        </Card.Text>
      </Card.Body>
      <ListGroup className="d-flex list-group-flush">
        <ListGroup.Item>{recipes.rating}</ListGroup.Item>
        <Rating 
        style={{ maxWidth: 150 }} 
        value={Math.round(Rating?.number || 0)} readOnly />
      </ListGroup>
      <Card.Body>
      <Button onClick={handleAddToToast} variant="primary">Favourite</Button>      </Card.Body>
      <ToastContainer></ToastContainer>
    </Card>
  );
};

export default ViewRacipe;
