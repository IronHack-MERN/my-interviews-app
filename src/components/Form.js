import React, { Fragment } from "react";

const Form = () => {
  return (
    <Fragment>
      <h2>Create </h2>
      <form>
        <labe>Name</labe>
        <input
          type="text"
          name="company"
          className="u-full-width"
          placeholder="Compony name"
        />
        <labe>Recruiter</labe>
        <input
          type="text"
          name="recruiter"
          className="u-full-width"
          placeholder="Recruiter name"
        />
        <labe>Date</labe>
        <input type="date" 
          name="date" 
          className="u-full-width" />
        <labe>Time</labe>
        <input
          type="time"
          name="time"
          className="u-full-width"
        />
        <label>Technical Test</label>
        <textarea
          className='u-full-width'
          name='technical-test'
        >
        </textarea>
        <button
          type='submit'
          className='u-full-width button-primary'
        >
          ADD apply
        </button>
      </form>
    </Fragment>
  );
};

export default Form;
