import React, { useState } from 'react';
import QuizItem from '../components/QuizItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

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

const handleBackBtn = () => {
  setCount((count - 1));
}

  // less 75 pixels to compensate for the navbar
  const windowHeight = document.documentElement.clientHeight - 75;
  
  const styles = {
    button: {
      fontSize: '20px',
      paddingBottom: '7px'
    },
    div: {
      height: windowHeight
    },
    p: {
      textAlign: 'center'
    }
  }

  return (
    <div className="container d-flex justify-content-center align-items-center" style={styles.div}>
      <form className="form">

        <QuizItem response={response} setResponse={setResponse} count={count} />

        {/* Form Controls */}
        <div className="d-flex justify-content-end">
          {/* Ternery to prevent back button showing when at the start */}
          {count >= 1 ? (
                  <button 
                  className="btn btn-outline-danger"
                  type="button" 
                  onClick={handleBackBtn}
                  style={styles.button}
                  >
                  <FontAwesomeIcon
                      role="button"
                      aria-label="back" 
                      icon={faChevronLeft}
                  ></FontAwesomeIcon>
                  </button>
          ) : (false)}

        <button 
        className="btn btn-outline-warning"
        type="button" 
        onClick={handleFormSubmit}
        style={styles.button}
        >
        <FontAwesomeIcon
          role="button"
          aria-label="back" 
          icon={faChevronRight}
        ></FontAwesomeIcon>
        </button>
        </div>

      </form>
    </div>
  );
}


export default Quiz;