import Timeline from "@mui/lab/Timeline";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import TimeLineElement from "./TimeLineElement";

let times = [];
for (let i = 0; i < 24; i++) {
  times.push(`${i}:00`);
}

export default function TimeLine() {
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >
      {times.map((time) => {
        return <TimeLineElement time={time} />;
      })}
    </Timeline>
  );
}
