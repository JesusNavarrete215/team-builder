import React, { useState } from "react";

const proList = [];

export default function Form() {
  const [formValues, setFormValues] = useState({ name: "", email: "" });
  const [member, setMember] = useState(proList);

  const change = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const submit = (event) => {
    event.preventDefault();
    const newMember = {
      name: formValues.name,
      email: formValues.email,
    };
    setMember(member.concat(newMember)); //we are adding the new pet info from the inputs into the array pets and printing it on the webpage with a pest map in return section
    setFormValues({ name: "", email: "" }); //this will have the inputs set back to blank
  };

  return (
    <form onSubmit={submit}>
      {member.map((member, idx) => (
        <div key={idx}>
          {member.name} {member.email}
        </div>
      ))}
      <label htmlFor="name">Name</label>
      <input id="name" type="text" name="name" onChange={change} />

      <label htmlFor="email">Email</label>
      <input id="email" type="email" name="email" onChange={change} />

      <label htmlFor="role">Occupation</label>
      <select id="role" name="role" onChange={change}>
        <option value="FE">Frontend Engineer</option>
        <option value="BE">Backend Engineer</option>
        <option value="D"> Designer</option>
      </select>

      <input type="submit" value="Add Member" />
    </form>
  );
}
