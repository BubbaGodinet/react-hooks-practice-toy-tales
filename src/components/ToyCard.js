import React from "react";

function ToyCard({key, id, name, image, likes, handleDelete, handleLike}) {

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        id = {id}
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button onClick = {() => handleLike(id, likes)} className="like-btn">Like {"<3"}</button>
      <button onClick = {() => handleDelete(id)} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
