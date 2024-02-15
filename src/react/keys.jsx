import React from 'react';

const Example = () => {
    const items = ['apple', 'banana', 'orange'];

    return (
        <div>
            <h1>Fruits</h1>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Example;
