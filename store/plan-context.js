import React, { useState } from "react";

const PlanContext = React.createContext({
  cartItems: []
});

export const PlanContextProvider = (props) => {
  const [planItems, setPlanItems] = useState([]);

  return (
    <PlanContext.Provider
      value={{
        cartItems: cartItems
      }}
    >
      {props.children}
    </PlanContext.Provider>
  );
};

export default PlanContext;
