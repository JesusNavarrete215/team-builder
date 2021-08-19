import React, { useState } from "react";
import Form from "./Form";
import "./App.css";

const initialFormValues = {
  name: "",
  email: "",
  role: "",
};

function App() {
  return (
    <div className="App">
      <h2>Team Member List</h2>
      {members.map((member, id) => {
        return <p key={id}>{member.name}</p>;
      })}
      <Form />
    </div>
  );
}

export default App;
