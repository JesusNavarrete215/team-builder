import React, { useState } from "react";

const initialFormValues = [{ name: "" }, { email: "" }, { role: "" }];

export default function Form() {
  const [formValues, seFormValues] = useState([]);
  return (
    <form onSubmit={() => {}}>
      <label htmlFor="name">Name</label>
      <input id="name" type="text" name="name" onChange={() => {}} />

      <label htmlFor="email">Email</label>
      <input id="email" type="email" name="email" onChange={() => {}} />

      <label htmlFor="role">Occupation</label>
      <select id="role" name="role" onChange={() => {}}>
        <option value="FE">Frontend Engineer</option>
        <option value="BE">Backend Engineer</option>
        <option value="D"> Designer</option>
      </select>
    </form>
  );
}
