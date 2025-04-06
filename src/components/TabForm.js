import React, { useState } from "react";
import Profile from "./Profile";
import Interest from "./Interest";
import Setting from "./Setting";
const TabForm = () => {
  const [active, setActive] = useState(0);
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    name: "Tarun Gupta",
    age: 24,
    email: "tarungupta@gmail.com",
    interest: ["coding", "music", "movie"],
    theme: "dark",
  });
  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {};
        if (!data.name || data.name.length < 2) {
          err.name = "Name is not valid";
        }
        if (!data.email || data.email.length < 2) {
          err.name = "Email is not valid";
        }
        if (!data.age || data.age < 18) {
          err.name = "Age is not valid";
        }
        setErrors(err);
        return err.name || err.email || err.age ? false : true;
      },
    },
    {
      name: "Interest",
      component: Interest,
      validate: () => {
        const err = {};
        if (!data.interest || !data.name.interest < 1) {
          err.interest = "Interset is not valid";
        }

        setErrors(err);
        return err.interest ? false : true;
      },
    },
    {
      name: "Setting",
      component: Setting,
      validate: () => {
        return true;
      },
    },
  ];
  const ActiveTabCom = tabs[active].component;

  const handleNext = () => {
    if (tabs[active].validate()) setActive((prevState) => prevState + 1);
  };

  const handlePrev = () => {
    if (tabs[active].validate()) setActive((prevState) => prevState - 1);
  };

  const submitForm = () => {
    console.log(data);
  };
  return (
    <>
      <div className="heading-container">
        {tabs.map((t, index) => (
          <div
            className="heading"
            key={t.name}
            onClick={() => setActive(index)}
          >
            {t.name}
          </div>
        ))}
      </div>
      <div className="tab-body">
        <ActiveTabCom
          data={data}
          setData={setData}
          setErrors={setErrors}
          errors={errors}
        />
      </div>
      <div>
        {active > 0 && (
          <button type="button" onClick={handlePrev}>
            Prev Tab
          </button>
        )}
        {active < tabs.length - 1 && (
          <button type="button" onClick={handleNext}>
            Next Tab
          </button>
        )}
        {active === tabs.length - 1 && (
          <button type="button" onClick={submitForm}>
            Submit
          </button>
        )}
      </div>
    </>
  );
};

export default TabForm;
