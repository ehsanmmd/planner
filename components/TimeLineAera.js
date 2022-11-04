import Timeline from "@mui/lab/Timeline";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import TimeLineElement from "./TimeLineElement";

let times = [];
for (let i = 9; i < 16; i++) {
  times.push(`${i}:00`);
}

export default function TimeLineArea() {
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >
      {times.map((time, index) => {
        return <TimeLineElement time={time} key={index} />;
      })}
    </Timeline>
  );
}
