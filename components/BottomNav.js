import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import { useState } from "react";

export default function BottomNav(props) {
  const [value, setValue] = useState(0);

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 1300 }}
      elevation={6}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          console.log(newValue);
        }}
      >
        <BottomNavigationAction icon={<HomeIcon fontSize="large" />} />
        <BottomNavigationAction icon={<AddCircleIcon fontSize="large" />} />
        <BottomNavigationAction icon={<SettingsIcon fontSize="large" />} />
      </BottomNavigation>
    </Paper>
  );
}
