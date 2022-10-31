import * as React from "react";
import dayjs from "dayjs";
import { CalendarPicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Grid } from "@mui/material";

export default function Home() {
  const [date, setDate] = React.useState(dayjs("2022-04-07"));

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Grid container spacing={3}>
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
    </>
  );
}
