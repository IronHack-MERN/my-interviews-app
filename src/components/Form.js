import React, { Fragment, useState } from "react";
import { v4 as uuid } from 'uuid';

const Form = ({ createInterview }) => {

  const [interview, updateInterview] = useState({
    company: "",
    recruiter: "",
    date: "",
    time: "",
    technicalTest: "",
  });

  const [error, updateError] = useState(false);

  const updateState = (e) => {
    updateInterview({
      ...interview,
      [e.target.name]: e.target.value,
    });
  };

  // Extract input values
  const { company, recruiter, date, time, technicalTest } = interview;

  // On click addInterview
  const submitInterview = (e) => {
    e.preventDefault();

    // Validate
    if (
      company.trim() === "" ||
      recruiter.trim() === "" ||
      date.trim() === "" ||
      time.trim() === "" ||
      technicalTest.trim() === ""
    ) {
      updateError(true);
      return;
    }

    // Delete initial message
    updateError(false);

    // Create unique id with uuid library
    interview.id = uuid();

    // Create interview
    createInterview(interview);
  };

  return (
    <Fragment>
      <h2>Create Interview</h2>

      {
        error ? (
        <p className="alerta-error">All fields are required</p>
        ) : (
        null
        )
      }
      <form>
        <label>Name</label>
        <input
          type="text"
          name="company"
          value={company}
          className="u-full-width"
          placeholder="Compony name"
          onChange={updateState}
        />

        <label>Recruiter</label>
        <input
          type="text"
          name="recruiter"
          value={recruiter}
          className="u-full-width"
          placeholder="Recruiter name"
          onChange={updateState}
        />

        <label>Date</label>
        <input
          type="date"
          name="date"
          value={date}
          className="u-full-width"
          onChange={updateState}
        />

        <label>Time</label>
        <input
          type="time"
          name="time"
          value={time}
          className="u-full-width"
          onChange={updateState}
        />

        <label>Technical Test</label>
        <textarea
          className="u-full-width"
          name="technicalTest"
          value={technicalTest}
          onChange={updateState}
        ></textarea>
        <button
          type="submit"
          className="u-full-width button-primary"
          onClick={submitInterview}
        >
          ADD interview
        </button>
      </form>
    </Fragment>
  );
};

export default Form;
