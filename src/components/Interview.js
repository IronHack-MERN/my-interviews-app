import React from 'react';

const Interview = ({ interview, removeInterview }) => {
    return ( 
        <div className='cita'>
            <p>Company: <span>{interview.company}</span></p>
            <p>Recruiter: <span>{interview.recruiter}</span></p>
            <p>Date: <span>{interview.date}</span></p>
            <p>Time: <span>{interview.time}</span></p>
            <p>Technical Test: <span>{interview.technicalTest}</span></p>
            <button
                className='button  eliminar u-full-width'
                onClick = { () => removeInterview(interview.id)}
            >
                Delete &times;
            </button>
        </div>
     );
}
 
export default Interview;
