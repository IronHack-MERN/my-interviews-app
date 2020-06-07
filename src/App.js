import React, { Fragment, useState } from "react";
import "./App.css";
import Form from './components/Form';
import Interview from './components/Interview';

function App() {
  const [ interviews, saveInterviews ] = useState([]);

  const createInterview = (interview) => {
    saveInterviews([
      ...interviews,
      interview
    ])
  }

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
            <h2>Admin your interviews</h2>
            {
              interviews.map( (interview) => (
                <Interview
                  key = {interview.id}
                  interview = {interview}
                />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
