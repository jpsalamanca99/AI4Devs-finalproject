import React from "react";
import DualClickableLists from "../components/molecules/DualClickableLists.jsx";
import SubmitButton from '../components/atoms/SubmitButton.jsx';


const CreateTournament = () => {
  return (
    <div>
      <h1>Create Tournament</h1>
      <DualClickableLists />
      <SubmitButton label="Submit" /> {/* Submit button */}
    </div>
  );
};

export default CreateTournament;
