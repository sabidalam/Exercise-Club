import React from 'react';
import './Exercise.css';

const Exercise = (props) => {
    const { img, name, equipment, time, instructions } = props.Exercise
    return (
        <div>
            <div className='exercise-body'>
                <img src={img} alt="" />
                <div className='exercise-info'>
                    <h3>{name}</h3>
                    <h4>Equipment: {equipment}</h4>
                    <h5>Time Required: {time}s</h5>
                    <p><b>Instruction</b>: {instructions}</p>
                </div>
                <button className='add-btn'>Add to List</button>
            </div >

        </div >
    );
};

export default Exercise;