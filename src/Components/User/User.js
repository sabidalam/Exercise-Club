import React from 'react';
import './User.css';
import logo from '../../images/me.jpg'

const User = () => {
    return (
        <div>
            <div className='user-info'>
                <img src={logo} alt="" />
                <div className='user-details'>
                    <h3>Shafkat Saad</h3>
                    <span>Dhaka, Bangladesh</span>
                </div>

            </div>

        </div>
    );
};

export default User;