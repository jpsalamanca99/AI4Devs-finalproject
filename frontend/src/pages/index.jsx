import React from 'react';
import TextInput from '../components/TextInput.jsx';
import SubmitButton from '../components/SubmitButton.jsx';

const LoginPage = () => {
    return (
        <div>
            <h1>Tournament Organizer</h1> {/* Title */}
            <TextInput placeholder="NID" /> {/* First text input */}
            <TextInput placeholder="Password" /> {/* Second text input */}
            <SubmitButton label="Submit" /> {/* Submit button */}
        </div>
    );
};

export default LoginPage;