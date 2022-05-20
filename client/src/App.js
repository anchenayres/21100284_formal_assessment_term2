import React from 'react';
import { useState } from 'react'
import axios from 'axios';


function App() {

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
  }

  const handleSubmit = (event) => {
    console.log(inputs);
    event.preventDefault();


    axios.post('http://localhost/server/addUser', inputs)
    .then(function(response){
      console.log(response);
    });
  }

  return (
    <div className="App">
        <div className="formCon">
          <h1>Expawts: Pet Relocation</h1>
          <p>Sign up below and we will send you a quote!</p>
          <form>
            <input name="petNames" placeholder="Name of Pet" onChange={handleChange} />
            <select>
              <option selected name="petSpecies" onChange={handleChange} disabled hidden>Species of Pet</option>
              <option>Canine</option>
              <option>Feline</option>
              <option>Equine</option>
              <option>Rodent</option>
              <option>Avian</option>
              <option>Reptile</option>
            </select>
            <select>
              <option selected name="petGender" onChange={handleChange} disabled hidden>Gender/Sex of Pet</option>
              <option>Male</option>
              <option>Female</option>
            </select>
            <input name="petAge" placeholder="Age of Pet (years) " onChange={handleChange} />
            <input name="petMicrochip" placeholder="Pet MicroChip Id" onChange={handleChange} />
            <input name="ownerName" placeholder="Pet Owner Name" onChange={handleChange} />
            <input name="ownerId" placeholder="Pet Owner ID Number" onChange={handleChange} />
            <input name="exportOri" placeholder="Export Origin" onChange={handleChange} />
            <input name="exportDest" placeholder="Export Destination" onChange={handleChange} />

            <button onClick={handleSubmit}>Lets Export That Pet!</button>

            

          </form>

        </div>
    </div>
  );
}

export default App;
