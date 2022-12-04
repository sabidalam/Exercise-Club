import React, { useEffect, useState } from 'react';
import './User.css';
import logo from '../../images/me.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const User = ({ List }) => {
    let totalTime = 0;
    for (const exercise of List) {
        totalTime = (totalTime + exercise.time);
    }

    const [value, setValue] = useState('');
    const clickHandler = e => {
        setValue(e.target.value);

    }

    const displayToast = () => {
        toast("All Activity Completed!", {
            position: 'top-center'
        });
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
                    <input className='time-btn' type="button" value="20s" onClick={clickHandler} />
                    <input className='time-btn' type="button" value="30s" onClick={clickHandler} />
                    <input className='time-btn' type="button" value="40s" onClick={clickHandler} />
                    <input className='time-btn' type="button" value="50s" onClick={clickHandler} />
                    <input className='time-btn' type="button" value="60s" onClick={clickHandler} />
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
                    <span><b>{value}</b></span>
                </div>
            </div>
            <button onClick={displayToast} className='complete-btn'>Activity Completed</button>
            <ToastContainer />
        </div>
    );
};

export default User;