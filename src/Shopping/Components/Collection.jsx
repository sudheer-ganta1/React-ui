import React from "react";
import "../Styles/Collection.css";

const Collection = ({ menFashion }) => {
  return (
    <div className="collection-container">
      {menFashion.map((item) => (
        <div className="card" key={item.id}>
          <img src={item.image} alt={item.title} />
          <h4>{item.title}</h4>
          <h3>₹{item.price}</h3>
        </div>
      ))}
    </div>
  );
};

export default Collection;
