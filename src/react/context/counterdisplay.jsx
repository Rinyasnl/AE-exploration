import React, { useContext } from 'react';
import { MyContext } from './myprovider';

const CounterDisplay = () => {
    const { count } = useContext(MyContext);

    return <div>Count: {count}</div>;
};

export default CounterDisplay;
