import React, { useState } from "react";
import { useRouter } from "next/router";
import { authenticateOrganizer } from "@/services/API.js";
import SubmitButton from "../components/atoms/SubmitButton.jsx";
import TextInput from "@/components/atoms/TextInput.jsx";

const LoginPage = () => {
  const [nid, setNid] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleOnClick = async () => {
    try {
      const response = await authenticateOrganizer({ nid, password });
      
      if (response.status === 200) {
        router.push({
          pathname: "/TournamentList",
          query: { nid },
        });
      } else {
        alert("Login failed:", response.data.message);
      }
    } catch (error) {
      alert("Error during login:", error);
    }
  };

  return (
    <div>
      <h1>Tournament Organizer</h1>
      <TextInput
        placeholder="NID"
        value={nid}
        onChange={(e) => setNid(e.target.value)}
      />
      <TextInput
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <SubmitButton label="Submit" onClick={handleOnClick} />
    </div>
  );
};

export default LoginPage;
