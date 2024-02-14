import React from 'react';

const arrayDest = () => {
  const [firstItem, ...restItems] = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];


  const [firstName = 'John', lastName = 'Doe'] = ['Alice'];


  const [fruit, [color, ...otherColors]] = ['Apple', ['Red', 'Green', 'Yellow']];

  return (
    <div>
      <h1>Complicated Component</h1>
      <p>First Item: {firstItem}</p>
      <p>Rest Items: {restItems.join(', ')}</p>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Fruit: {fruit}</p>
      <p>Color: {color}</p>
      <p>Other Colors: {otherColors.join(', ')}</p>
    </div>
  );
};

export default arrayDest;
