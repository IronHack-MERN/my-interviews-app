import React, { Fragment } from "react";
import "./App.css";
import Form from './components/Form';

function App() {
  return (
    <Fragment>
      <h1>My jobs applications</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form/>
          </div>
          <div className="one-half column">2</div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
