import React from "react";

const CategoryItems = [
  {
    id: "women_shirt",
    catImage: "./images/cat_menu/shirt.jpg",
    catName: "Shirt",
  },
  {
    id: "women_pant",
    catImage: "./images/cat_menu/pant.jpg",
    catName: "Pants",
  },
  {
    id: "women_shoe",
    catImage: "./images/cat_menu/shoe.jpg",
    catName: "Shoes",
  },
  {
    id: "women_bag",
    catImage: "./images/cat_menu/bag.jpg",
    catName: "Handbags",
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
          <div key={category.id}>
            <img src={category.catImage} alt="category-item" />
            <p className="w-inherit grid place-content-center">
              {category.catName}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
