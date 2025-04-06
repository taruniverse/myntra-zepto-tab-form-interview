import React from "react";

const Profile = ({ data, setData }) => {
  const { name, email, age } = data;
  const handleDataChange = (item, value) => {
    setData((prevState) => ({
      ...prevState,
      [item]: value,
    }));
  };
  return (
    <div>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => handleDataChange("name", e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => handleDataChange("email", e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="age">age: </label>
        <input
          type="number"
          name="age"
          id="age"
          value={age}
          onChange={(e) => handleDataChange("age", e.target.value)}
        />
      </div>
    </div>
  );
};

export default Profile;
