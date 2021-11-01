import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../gql/mutations';
import Auth from '../utils/auth';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
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

      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>

      <div class="form-floating mb-3">
            <input 
              name="email"
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
              name="password"
              type="password"
              onChange={handleChange}
              className="form-control" 
              id="pwd" 
              placeholder="name@example.com"
            ></input>
            <label for="pwd">Password:</label>
        </div>

        {/* <div className="flex-row space-between my-2">
          <label htmlFor="email">Email address:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div> */}

        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <div className="flex-row flex-end">
          <button className="btn btn-outline-warning" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
