import React, { useState } from "react";
import Profile from "./Profile";
import Interest from "./Interest";
import Setting from "./Setting";
const TabForm = () => {
  const [active, setActive] = useState(0);
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
    },
    {
      name: "Interest",
      component: Interest,
    },
    {
      name: "Setting",
      component: Setting,
    },
  ];
  const ActiveTabCom = tabs[active].component;

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
        <ActiveTabCom data={data} setData={setData} />
      </div>
      <div>
        {active === tabs.length - 1 && <button type="button">Submit</button>}
      </div>
    </>
  );
};

export default TabForm;
