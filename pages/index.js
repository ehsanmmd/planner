import * as React from "react";
import Layout from "./Layout";
import { PlanContextProvider } from "../store/plan-context";

export default function Home() {
  return (
    <PlanContextProvider>
      <Layout />
    </PlanContextProvider>
  );
}
