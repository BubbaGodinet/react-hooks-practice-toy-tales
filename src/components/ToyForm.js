import React, { useState } from "react";

function ToyForm({handleNewToySubmit}) {
  const [toyData, setToyData] = useState({
    id: '',
    name: '',
    image: '',
    likes: 0
  });

function handleSubmit (e) {
  e.preventDefault()
  handleNewToySubmit(toyData)
}

function handleChange (e) {
  setToyData({...toyData, [e.target.name]:e.target.value})
}

  return (
    <div className="container">
      <form onSubmit = {handleSubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input onChange = {handleChange}
          type="text"
          name="name"
          value = {toyData.name}
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input onChange = {handleChange}
          type="text"
          name="image"
          value = {toyData.image}
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
