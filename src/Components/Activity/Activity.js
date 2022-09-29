import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import './Activity.css';

const Activity = () => {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        fetch('activities.json')
            .then(res => res.json())
            .then(data => setExercises(data))

    }, []);
    return (
        <div>
            <h3 className='Title'>Select Today's Exercise</h3>
            <div className='activity-container'>
                <div className='all-activities'>
                    {
                        exercises.map(exercise => <Exercise
                            Exercise={exercise}>
                        </Exercise>)
                    }
                </div>
                <div className='user-info'>

                </div>
            </div>
        </div>
    );
};

export default Activity;