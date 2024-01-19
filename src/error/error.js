import React, { Component } from 'react';

// Simulated API call to fetch user data
const fetchUserData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate an error
      reject(new Error('Failed to fetch user data'));
    }, 1000);
  });
};

// User Profile Component
class UserProfile extends Component {
  state = {
    user: null,
  };

  componentDidMount() {
    // Simulate fetching user data
    fetchUserData()
      .then(user => this.setState({ user }))
      // Uncomment the line below to see the error handled by the error boundary
      // .then(() => { throw new Error('An error in componentDidMount'); })
      .catch(error => {
        // This will be caught by the error boundary
        throw error;
      });
  }

  render() {
    // This will cause an error if 'user' is null
    const { username, email } = this.state.user;

    return (
      <div>
        <h2>User Profile</h2>
        <p>Username: {username}</p>
        <p>Email: {email}</p>
      </div>
    );
  }
}



