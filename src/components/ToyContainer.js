import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, handleDelete, handleLike}) {
 
  const toysArr = toys.map(toy => <ToyCard key = {toy.id} id = {toy.id} name = {toy.name} image = {toy.image} likes = {toy.likes} handleDelete = {handleDelete} handleLike = {handleLike}/>)

  return (
    <div id="toy-collection">{toysArr}</div>
  );
}

export default ToyContainer;
