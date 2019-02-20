import React from "react";
import { makeStyles } from "@material-ui/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import "./css/BottomNav.css";
import purple from "@material-ui/core/colors/purple";
import red from "@material-ui/core/colors/red";
const useStyles = makeStyles({
  root: {
    width: "100%"
  }
});

const primary = red[500]; // #F44336
const accent = purple["A200"]; // #E040FB
const accent = purple.A200; // #E040FB (alternative method)

function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}

export default SimpleBottomNavigation;
