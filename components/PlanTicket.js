import { Paper, Typography, Grid } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

export default function PlanTicket(props) {
  return (
    <Paper
      sx={{
        padding: "10px",
        bgcolor: "#999",
        width: "220px",
        borderRadius: "10px",
      }}
    >
      <Typography sx={{ fontWeight: "bold" }}>{props.title}</Typography>
      <Grid container direction="row" justifyContent="space-between">
        <Grid>
          <Grid container direction="row">
            <Grid>
              <LocationOnIcon />
            </Grid>
            <Grid>
              <Typography>{props.location}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid>
          <Grid container direction="row">
            <Grid>
              <AccessTimeFilledIcon />
            </Grid>
            <Grid>
              <Typography>{`${props.time[0]}-${props.time[1]}`}</Typography>
              {console.log(props)}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
