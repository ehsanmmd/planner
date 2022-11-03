import React from "react";
import Grid from "@mui/material/Grid";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { CalendarPicker, LocalizationProvider } from "@mui/x-date-pickers";
import { Paper } from "@mui/material";

export default function Calendar(props) {
  const [date, setDate] = React.useState(dayjs(props.upcomingDate));

  return (
    <Paper elevation={10}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Grid container spacing={3} bgcolor="#fff">
          <Grid item xs={12} md={6}>
            <CalendarPicker
              date={date}
              onChange={(newDate) => setDate(newDate)}
              maxDate="2024-01-01"
              minDate="2018-01-01"
            />
          </Grid>
        </Grid>
      </LocalizationProvider>
    </Paper>
  );
}
