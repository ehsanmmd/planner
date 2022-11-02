import * as React from "react";
import Drawer from "../components/Drawer";
import Calendar from "../components/calendar";
import BottomNav from "../components/BottomNav";

export default function Home() {
  const [value, setValue] = React.useState(0);

  return (
    <>
      <Calendar />
      <BottomNav />
      <Drawer>
        <TimeLine />
      </Drawer>
    </>
  );
}
