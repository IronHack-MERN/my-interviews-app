import React, { Fragment, useState, useEffect } from "react";
import "./App.css";
import Form from './components/Form';
import Interview from './components/Interview';

function App() {
  const [ interviews, saveInterviews ] = useState([]);
  useEffect( () => {
    console.log('hola effect');
  }, [] );

  const createInterview = (interview) => {
    saveInterviews([
      ...interviews,
      interview
    ])
  }

  const removeInterview = (id) => {
    console.log(`deleteando cita ${id}`)
    const newInterviews = interviews.filter( interview => interview.id !== id );
    saveInterviews(newInterviews);
  }

  // Conditional message
  const title = interviews.length === 0 ? `You don't have interviews yet!` : 'Admin your interviews'

  return (
    <Fragment>
      <h1>My jobs applications</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form
              createInterview = {createInterview}
            />
          </div>
          <div className="one-half column">
            <h2>{title}</h2>
            {
              interviews.map( (interview) => (
                <Interview
                  key = {interview.id}
                  interview = {interview}
                  removeInterview = {removeInterview}
                />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
