import React from 'react';

const List = () => {
    const items = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango'];

    return (
        <div>
            <h2>List Example</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default List;
