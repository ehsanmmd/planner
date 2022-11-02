import * as React from "react";
import Drawer from "../components/Drawer";
import Calendar from "../components/calendar";
import BottomNav from "../components/BottomNav";
import TimeLine from "../components/TimeLine";

export default function Home() {
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
