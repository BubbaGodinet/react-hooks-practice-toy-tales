import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

 useEffect(() => (fetch('http://localhost:3001/toys')
 .then(res => res.json())
 .then(toys => setToys(toys))),[])

 function handleNewToySubmit (newToy) {
   const newToyObj = {
     id: newToy.id,
     name: newToy.name,
     image: newToy.image,
     likes: newToy.likes
   }
   fetch('http://localhost:3001/toys' ,{
   method: 'POST', 
   headers: {'Content-Type': 'application/json'
  }, 
   body:JSON.stringify(newToyObj)
})
  .then(res => res.json())
  .then(toy => setToys([toy, ...toys]))
 }

 function handleDelete (id) {
  console.log('delete')
  console.log('id:',id)
  fetch(`http://localhost:3001/toys/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(() => {
    const toysFiltered = toys.filter(toy => toy.id !== id) 
    setToys(toysFiltered)
  })
}

function handleLike (id, likes) {
  console.log('id:',id)
  console.log('liked')
  fetch(`http://localhost:3001/toys/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify({likes: ++likes})
  })
  .then(res => res.json())
  .then(data => {
    const likedToys = [...toys]
    const idx = likedToys.findIndex(toy => toy.id === data.id)
    likedToys[idx] = {...likedToys[idx], likes: data.likes++}
    setToys(likedToys)
    console.log(idx)
    console.log(likedToys[idx])
  })
}

  return (
    <>
      <Header />
      {showForm ? <ToyForm handleNewToySubmit = {handleNewToySubmit}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys = {toys} handleDelete = {handleDelete} handleLike = {handleLike}/>
    </>
  );
}

export default App;
