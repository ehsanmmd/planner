import Drawer from "../components/Drawer";
import Calendar from "../components/Calendar";
import BottomNav from "../components/BottomNav";
import TimeLineArea from "../components/TimeLineAera";
import { useContext } from "react";
import PlanContext from "../store/plan-context";

const today = new Date();

export default function Layout() {
  const ctx = useContext(PlanContext);

  const upComingDate = ctx.planItems[0].date.getDate();
  const upComingMonth = ctx.planItems[0].date.getMonth() + 1;
  const upComingYear = ctx.planItems[0].date.getFullYear();
  const strUpcomingDate =
    ctx.planItems[0] !== undefined
      ? `${upComingYear}-${upComingMonth}-${upComingDate}`
      : "";

  return (
    <>
      <Calendar upcomingDate={strUpcomingDate} />
      <BottomNav />
      <Drawer>
        <TimeLineArea />
      </Drawer>
    </>
  );
}
