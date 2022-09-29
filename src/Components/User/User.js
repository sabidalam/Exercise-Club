import React, { useState } from 'react';
import './User.css';
import logo from '../../images/me.jpg';

const User = ({ List }) => {
    console.log(List);
    let totalTime = 0;
    for (const exercise of List) {
        totalTime = totalTime + exercise.time;
    }

    return (
        <div>
            <div className='user-info'>
                <img src={logo} alt="" />
                <div className='user-details'>
                    <h3>Shafkat Saad</h3>
                    <span>Dhaka, Bangladesh</span>
                </div>
            </div>
            <div className='user-bio'>
                <div>
                    <h3>65kg</h3>
                    <span>Weight</span>
                </div>
                <div>
                    <h3>5.8</h3>
                    <span>Height</span>
                </div>
                <div>
                    <h3>23yrs</h3>
                    <span>Age</span>
                </div>
            </div>
            <div className='break'>
                <h3>Add A Break</h3>
                <div className='break-time'>
                    <button className='time-btn'><span id='1st'>20s</span></button>
                    <button className='time-btn'>30s</button>
                    <button className='time-btn'>40s</button>
                    <button className='time-btn'>50s</button>
                    <button className='time-btn'>60s</button>
                </div>
            </div>
            <div className='exercise-details'>
                <h3>Exercise Details</h3>
                <div className='exercise-time'>
                    <h4>Exercise Time</h4>
                    <span><b>{totalTime}seconds</b></span>
                </div>
                <div className='break-time'>
                    <h4>Break time</h4>
                    <span></span>
                </div>
            </div>
            <button className='complete-btn'>Activity Completed</button>
        </div>
    );
};

export default User;