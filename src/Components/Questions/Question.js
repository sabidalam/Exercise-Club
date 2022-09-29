import React from 'react';
import './Question.css';

const Question = () => {
    return (
        <div className='question-container'>
            <h1>Questions</h1>
            <div className='questions'>
                <h2>How does react work?</h2>
                <p>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. 'V' denotes the view in MVC. ReactJS is an open-source, component-based front end library responsible only for the view layer of the application. It is maintained by Facebook.
                    React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes. The declarative view makes your code more predictable and easier to debug.
                    A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks. A component may also maintain an internal state-for example, a TabList component may store a variable corresponding to the currently open tab.</p>
            </div>
            <div className='questions'>
                <h2>What's the difference between props and state?</h2>
                <p><b>Props:</b> <br />
                    1. The Data is passed from one component to another. <br />
                    2. It is Immutable (cannot be modified).<br />
                    3. Props can be used with state and functional components.
                    <br />
                    <b>State:</b> <br />
                    1. The Data is passed within the component only. <br />
                    2. It is Mutable ( can be modified). <br />
                    3. State can be used only with the state components/class component.
                </p>
            </div>
            <div className='questions'>
                <h2>What's the uses of useEffect except data loading?</h2>
                <p>
                    1. Add an event listener for a button. <br />
                    2. Perform an action when state or props change. <br />
                    3. Clean up event listeners when the component unmounts.
                </p>
            </div>

        </div>
    );
};

export default Question;