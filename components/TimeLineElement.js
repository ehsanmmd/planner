import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import Box from "@mui/system/Box";
import { Divider } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";

export default function TimeLineElement(props) {
  return (
    <TimelineItem>
      <TimelineOppositeContent color="textSecondary">
        {props.time}
      </TimelineOppositeContent>
      <TimelineSeparator />
      <TimelineContent>
        <Divider sx={{ mb: "18px", mt: "10px" }}  />
        <Box sx={{ display: "inline-block" }}>
          <Skeleton
            variant="rectangular"
            width={410}
            height={80}
            sx={{ borderRadius: "10px" }}
          />
        </Box>
      </TimelineContent>
    </TimelineItem>
  );
}
