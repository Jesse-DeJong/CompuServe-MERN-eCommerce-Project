import React, { useState } from 'react';
import QuizItem from '../components/QuizItem';

const Quiz = () => {
  // Here we set two state variables for firstName and lastName using `useState`
  const [count, setCount] = useState(0);
  const [response, setResponse] = useState('');
  
  let initialState = {
    budget: '',
    resolution: '',
    fps: '',
    features: []
};

  const handleFormSubmit = (e) => {
    e.preventDefault();

if (count === 0) {
    setCount((count + 1));
    initialState = {
        ...initialState,
        budget: response
    }
    setResponse('');
}   else if (count === 1) {
    setCount((count + 1));
    initialState = {
        ...initialState,
        resolution: response
    }
    setResponse('');
}   else if (count === 2) {
    setCount((count + 1));
    initialState = {
        ...initialState,
        fps: response
    }
    setResponse('');
}   else if (count === 3) {
    setCount((count + 1));
    initialState = {
        ...initialState,
        features: [...response]
    }
    setResponse('');
}


};

  return (
    <div>
      <form className="form">
        <p>
            count: <span>{count}</span>
        </p>

        <QuizItem response={response} setResponse={setResponse} count={count} />

        <button type="button" onClick={handleFormSubmit}>
          next
        </button>
      </form>
    </div>
  );
}


export default Quiz;