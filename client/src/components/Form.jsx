import axios from "axios";
import React, { useState } from "react";

const Form = () => {
  const [companyData, setcompanyData] = useState({
    name: "Tcs",
    email: "123@gmail.com",
    phoneNumber: "12345",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setcompanyData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/companies/", companyData)
      .then((res) => console.log("Data sent successfully" + res.data))
      .catch((err) => console.log("Error in submitting is " + err));
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center"
      >
        <label>Name</label>
        <input name="name" value={companyData.name} onChange={handleChange} />

        <label>Email</label>
        <input name="email" value={companyData.email} onChange={handleChange} />

        <label>PhoneNumber</label>
        <input
          name="phoneNumber"
          value={companyData.phoneNumber}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
