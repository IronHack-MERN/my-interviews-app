import React, { Fragment, useState } from "react";

const Form = () => {
  // Create state of apply
  const [interview, updateInterview] = useState({
    company: "",
    recruiter: "",
    date: "",
    time: "",
    technicalTest: "",
  });

  const updateState = (e) => {
    console.log(`Writing in ${e.target.name}`);
    updateInterview({
      ...interview,
      [e.target.name]: e.target.value,
    });
  };

  // Extract input values
  const { company, recruiter, date, time, technicalTest } = interview;

  return (
    <Fragment>
      <h2>Create </h2>

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
        <button type="submit" className="u-full-width button-primary">
          ADD apply
        </button>
      </form>
    </Fragment>
  );
};

export default Form;
