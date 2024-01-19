import React, { useState } from 'react';
import axios from 'axios';

const ExamplePostComponent = () => {
  const [postData, setPostData] = useState({ title: '', body: '' });

  const handlePostRequest = () => {
    // Make a POST request with data
    axios.post('https://jsonplaceholder.typicode.com/posts', postData)
      .then(response => {
        // Handle the successful response
        console.log('Post request successful:', response.data);
      })
      .catch(error => {
        // Handle errors
        console.error('Error making post request:', error);
      });
  };

  return (
    <div>
      <h1>Example POST Component</h1>
      <label>
        Title:
        <input type="text" value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
      </label>
      <label>
        Body:
        <textarea value={postData.body} onChange={(e) => setPostData({ ...postData, body: e.target.value })} />
      </label>
      <button onClick={handlePostRequest}>Make POST Request</button>
    </div>
  );
};

export default ExamplePostComponent;
