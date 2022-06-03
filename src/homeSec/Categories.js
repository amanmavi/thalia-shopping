import React from "react";
import { Link } from "react-router-dom";

const CategoryItems = [
  {
    id: "women_shirt",
    catImage: "./images/cat_menu/shirt.jpg",
    catName: "Shirt",
    catLink: "shirt",
  },
  {
    id: "women_pant",
    catImage: "./images/cat_menu/pant.jpg",
    catName: "Pants",
    catLink: "pant",
  },
  {
    id: "women_shoe",
    catImage: "./images/cat_menu/shoe.jpg",
    catName: "Shoes",
    catLink: "shoe",
  },
  {
    id: "women_bag",
    catImage: "./images/cat_menu/bag.jpg",
    catName: "Handbags",
    catLink: "bag",
  },
];

const Categories = () => {
  return (
    <div className="py-10  font-serif grid place-content-center">
      <p className="text-4xl w-full grid place-content-center font-semibold">
        I'm looking for ..
      </p>
      <div className="flex  py-6 gap-2">
        {CategoryItems.map((category) => (
          <Link to={"/collection/" + category.catLink} key={category.id}>
            <img src={category.catImage} alt="category-item" />
            <p className="w-inherit grid place-content-center">
              {category.catName}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
