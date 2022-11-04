import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import Box from "@mui/system/Box";
import { Divider } from "@mui/material";
import PlanTicket from "./PlanTicket";
import { useContext } from "react";
import PlanContext from "../store/plan-context";

export default function TimeLineElement(props) {
  const ctx = useContext(PlanContext);
  const selectedPlans = [];

  for (let i = 0; i < ctx.planItems.length; i++) {
    if (
      ctx.planItems[i].date.getDate() === ctx.selectedDate.getDate() &&
      ctx.planItems[i].date.getMonth() === ctx.selectedDate.getMonth() &&
      ctx.planItems[i].date.getFullYear() === ctx.selectedDate.getFullYear()
    ) {
      selectedPlans.push(ctx.planItems[i]);
    }
  }

  const tickets = selectedPlans.map((plan, index) => {
    if (plan.time[0] === props.time) {
      return (
        <PlanTicket
          title={plan.topic}
          location={plan.location}
          time={plan.time}
          key={index}
        />
      );
    }
  });

  return (
    <TimelineItem>
      <TimelineOppositeContent color="textSecondary">
        {props.time}
      </TimelineOppositeContent>
      <TimelineSeparator />
      <TimelineContent>
        <Divider sx={{ mb: "18px", mt: "10px" }} />
        <Box sx={{ display: "inline-block" }}>{tickets}</Box>
      </TimelineContent>
    </TimelineItem>
  );
}
