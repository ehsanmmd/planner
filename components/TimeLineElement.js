import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import Box from "@mui/system/Box";
import { Divider } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import PlanTicket from "./PlanTicket";
import { useContext } from "react";
import PlanContext from "../store/plan-context";

export default function TimeLineElement(props) {
  const ctx = useContext(PlanContext);

  const tickets = ctx.planItems.map((plan) => {
    if (plan.time[0] === props.time) {
     return <PlanTicket title={plan.topic} location={plan.location} time={plan.time}/>;
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
        <Box sx={{ display: "inline-block" }}>
          {tickets}
        </Box>
      </TimelineContent>
    </TimelineItem>
  );
}
