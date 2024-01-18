// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
    return (
        <div className="home-container">
            <h1>Home Page</h1>
            <p>Welcome to the home page!</p>
            <Link to="/login" className="home-link">
                Go to Login Page
            </Link>
        </div>
    );
};

export default Home;
