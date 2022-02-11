import React, { useState } from "react";

const Form = () => {
  const [companyData, setcompanyData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setcompanyData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(companyData);

    const { name, email, phoneNumber } = companyData;

    const postURL = "http://localhost:8000/companies";

    fetch(postURL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phoneNumber,
      }),
    })
      .then(() => console.log("Data successfully sent"))
      .catch(() => console.log("Problem in sending data"));

  }

    return (
      <div className="h-screen flex justify-center items-center w-full">
        <form
          method="POST"
          onSubmit={handleSubmit}
          className="flex flex-col bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 justify-center items-center"
        >
          <label className="w-full text-gray-700 text-sm font-bold mt-2">
            Name
          </label>
          <input
            name="name"
            value={companyData.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />

          <label className="w-full text-gray-700 text-sm font-bold mt-2">
            Email
          </label>
          <input
            name="email"
            value={companyData.email}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />

          <label className="w-full text-gray-700 text-sm font-bold mt-2">
            Phone Number
          </label>
          <input
            name="phoneNumber"
            value={companyData.phoneNumber}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />

          <button
            type="submit"
            className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
      </div>
    );
};

export default Form;
