import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import User from '../User/User';
import './Activity.css';

const Activity = () => {
    const [exercises, setExercises] = useState([]);
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch('activities.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, []);

    const handleAddToList = (exercise) => {
        const newList = [...list, exercise];
        setList(newList);

    }
    return (
        <div>
            <div className='activity-container'>
                <div>
                    <h3 className='Title'>Select Today's Exercise</h3>
                    <div className='all-activities'>
                        {
                            exercises.map(exercise => <Exercise
                                key={exercise.id}
                                Exercise={exercise}
                                HandleAddToList={handleAddToList}>
                            </Exercise>)
                        }
                    </div>
                </div>
                <div className='user-activity'>
                    <User List={list}></User>

                </div>
            </div>
        </div>
    );
};

export default Activity;