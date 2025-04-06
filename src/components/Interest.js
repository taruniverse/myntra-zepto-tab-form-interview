import React from "react";

const Interest = ({ data, setData }) => {
  const { interest } = data;
  const handleDataChange = (e, name) => {
    setData((prevState) => ({
      ...prevState,
      interest: e.target.checked
        ? [...prevState.interest, e.target.name]
        : prevState.interest.filter((data) => data !== e.target.name),
    }));
  };
  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            name="coding"
            checked={interest.includes("coding")}
            onChange={handleDataChange}
          />
          Coding
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="music"
            checked={interest.includes("music")}
            onChange={handleDataChange}
          />
          Music
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="java"
            checked={interest.includes("java")}
            onChange={handleDataChange}
          />
          Java
        </label>
      </div>
    </div>
  );
};

export default Interest;
