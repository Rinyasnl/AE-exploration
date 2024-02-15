import React, { useState } from 'react';

const Map = () => {
    const [items, setItems] = useState([
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Banana' },
        { id: 3, name: 'Orange' },
        { id: 4, name: 'Grapes' },
        { id: 5, name: 'Mango' },
    ]);

    const addItem = () => {
        const newItem = { id: items.length + 1, name: `New Item ${items.length + 1}` };
        setItems([...items, newItem]);
    };

    const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    return (
        <div>
            <h2>Dynamic List Example</h2>
            <button onClick={addItem}>Add Item</button>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name}
                        <button onClick={() => removeItem(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Map;
