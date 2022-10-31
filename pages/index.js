import * as React from "react";
import dayjs from "dayjs";
import { CalendarPicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  BottomNavigation,
  BottomNavigationAction,
  Grid,
  Paper,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SettingsIcon from "@mui/icons-material/Settings";

export default function Home() {
  const [date, setDate] = React.useState(dayjs("2022-04-07"));
  const [value, setValue] = React.useState(0);

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

      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          // value={value}
          // onChange={(event, newValue) => {
          //   setValue(newValue);
          // }}
        >
          <BottomNavigationAction icon={<HomeIcon fontSize="large" />} />
          <BottomNavigationAction icon={<AddCircleIcon fontSize="large" />} />
          <BottomNavigationAction icon={<SettingsIcon fontSize="large" />} />
        </BottomNavigation>
      </Paper>
    </>
  );
}
