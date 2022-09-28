import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';

const Activity = () => {
    const [exercises, setExercise] = useState([]);

    useEffect(() => {
        fetch('activities.json')
            .then(res => res.json())
            .then(data => setExercise(data))

    }, []);
    return (
        <div>
            <h3>Select Today's Exercise</h3>
            {
                exercises.map(exercise => <Exercise Exercise={exercises}></Exercise>)
            }

        </div>
    );
};

export default Activity;