// Create a home landing page for the application
// This is the first page the user will see when they visit the site

import React from 'react';
import '../index.css';
import TextPromptForm from './textPromptForm';

const Home = () => {
    return (
        <div>
            <h1>Welcome to the Chat App!</h1>
            <p>This is the landing page of the app.</p>
            <TextPromptForm />
        </div>
    );
};

export default Home;