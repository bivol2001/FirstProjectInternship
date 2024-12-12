import React from "react";
import "../Style/HomePage.css";

interface HomePageCards {
  description: string;
  price: string;
}

const HomePageCards = [
  {
    title: "title1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum illum expedita ea.",
    price: "34",
  },
  {
    title: "title2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum illum expedita ea.",
    price: "44",
  },
  {
    title: "title3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum illum expedita ea.",
    price: "23",
  },
];

const Cards = () => {
  return HomePageCards.map((card, index) => {
    return (
      <div className="homepage-board-card">
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <p className="card-description">{card.title}</p>
          <p className="card-description">{card.description}</p>
          <p className="card-price">{card.price}</p>
          <div className="card-btn">Add</div>
        </div>
      </div>
    );
  });
};

export default Cards;
