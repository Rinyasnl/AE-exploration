import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const MyContext = createContext();

const MyProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    return (
        <MyContext.Provider value={{ count, increment }}>
            {children}
        </MyContext.Provider>
    );
};

MyProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { MyContext, MyProvider };
