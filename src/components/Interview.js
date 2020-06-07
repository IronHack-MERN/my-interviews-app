import React from 'react';

const Interview = ({ interview }) => {
    return ( 
        <div className='cita'>
            <p>Company: <span>{interview.company}</span></p>
            <p>Recruiter: <span>{interview.recruiter}</span></p>
            <p>Date: <span>{interview.date}</span></p>
            <p>Time: <span>{interview.time}</span></p>
            <p>Technical Test: <span>{interview.technicalTest}</span></p>
        </div>
     );
}
 
export default Interview;
