import React from "react";
import DualClickableLists from "../components/DualClickableLists.jsx";
import SubmitButton from '../components/SubmitButton.jsx';


const CreateTournament = () => {
  return (
    <div>
      <h1>Tournament Organizer</h1>
      <DualClickableLists />
      <SubmitButton label="Submit" /> {/* Submit button */}
    </div>
  );
};

export default CreateTournament;
