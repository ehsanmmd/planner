import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { CalendarPicker, LocalizationProvider } from "@mui/x-date-pickers";

export default function Calendar() {
  const [date, setDate] = React.useState(dayjs("2022-04-07"));

  return (
    <Box>
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
    </Box>
  );
}
