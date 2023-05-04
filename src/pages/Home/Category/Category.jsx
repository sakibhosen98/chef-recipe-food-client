import React, { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://chef-recipe-food-server-sakibhosen98.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="mb-5">
      <h2>All Categories</h2>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {categories.map((category) => (
          <Recipe key={category.id} category={category}></Recipe>
        ))}
      </div>
    </div>
  );
};

export default Category;
