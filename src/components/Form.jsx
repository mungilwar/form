import React from 'react';
import { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`the name is${name}and emial is${email}`);
  };
  return (
    <div>
      <h4>Form validation</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Enter your name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <br />
        <div>
          <label>Enter your Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <br />
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Form;
