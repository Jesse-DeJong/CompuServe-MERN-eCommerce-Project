import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../gql/mutations';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1">

      <h2>Signup</h2>
      <form onSubmit={handleFormSubmit}>

      <div class="form-floating mb-3">
            <input 
              type="email"
              onChange={handleChange}
              className="form-control" 
              id="email" 
              placeholder="name@example.com"
            ></input>
            <label for="email">Email Address:</label>
        </div>
        <div class="form-floating mb-3">
            <input 
              type="password"
              onChange={handleChange}
              className="form-control" 
              id="pwd" 
              placeholder="name@example.com"
            ></input>
            <label for="pwd">Password:</label>
        </div>

        <div className="flex-row flex-end">
          <button className="btn btn-outline-warning" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
