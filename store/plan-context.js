import React, { useState } from "react";

const initialPlanItems = [
  {
    topic: "Daily",
    location: "London",
    date: new Date(2022, 10, 10),
    time: ["10:00", "11:00"],
  },
  {
    topic: "Design Task",
    location: "Berlin",
    date: new Date(2022, 10, 20),
    time: ["12:00", "13:00"],
  },
];

const PlanContext = React.createContext({
  planItems: initialPlanItems
});

export const PlanContextProvider = (props) => {
  const [planItems, setPlanItems] = useState(initialPlanItems);

  return (
    <PlanContext.Provider
      value={{
        planItems: planItems,
      }}
    >
      {props.children}
    </PlanContext.Provider>
  );
};

export default PlanContext;
