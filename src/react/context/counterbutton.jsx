import React, { useContext } from 'react';
import { MyContext } from './myprovider';

const CounterButtons = () => {
    const { increment } = useContext(MyContext);

    return (
        <div>
            <button onClick={increment}>Increment</button>
        </div>
    );
};

export default CounterButtons;
