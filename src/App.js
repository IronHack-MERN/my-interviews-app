import React, { Fragment, useState } from "react";
import "./App.css";
import Form from './components/Form';

function App() {

  // Array of interviews
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
          <div className="one-half column">2</div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
