import React, { useEffect, useState } from 'react';
import Recipe from '../Recipe/Recipe';

const Category = () => {
  const [categories, setCategories] = useState([]);

    useEffect( () =>{
      fetch('http://localhost:5000/categories')
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(error => console.error(error))
    }, [])
  return (
    <div>
      <h2>All Categories</h2>
      {
        categories.map(category => <Recipe
        key={category.id}
        category={category}
        ></Recipe>)
      }
    </div>
  );
};

export default Category;