import React from 'react';
import TextInput from '../components/atoms/TextInput.jsx';
import SubmitButton from '../components/atoms/SubmitButton.jsx';

const LoginPage = () => {
    return (
        <div>
            <h1>Tournament Organizer</h1>
            <TextInput placeholder="NID" />
            <TextInput placeholder="Password" />
            <SubmitButton label="Submit" />
        </div>
    );
};

export default LoginPage;