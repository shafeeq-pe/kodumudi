import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Icon from "@material-ui/core/Icon";
// import FavoriteIcon from "@material-ui/icons/Favorite";
import HomeIcon from "@material-ui/icons/Home";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
const styles = {
  root: {
    width: "100%",
    boxShadow: "0 -1px 2px 2px rgba(0, 0, 0, .1)"
  }
};
const theme = createMuiTheme({
  palette: {
    primary: { main: red["A400"] }, // Purple and green play nicely together.
    secondary: { main: "#F50057" } // This is just green.A700 as hex.
  },
  typography: { useNextVariants: true }
});

class LabelBottomNavigation extends React.Component {
  state = {
    value: "home"
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <MuiThemeProvider theme={theme}>
        <BottomNavigation
          value={value}
          onChange={this.handleChange}
          className={classes.root}
        >
          <BottomNavigationAction
            label="Home"
            value="home"
            icon={<HomeIcon />}
          />
           <BottomNavigationAction
            label="Gallery"
            value="gallery"
            icon={<Icon>collections</Icon>}
          />
          <BottomNavigationAction
            label="Members"
            value="members"
            icon={<Icon>portrait</Icon>}
          />
              <BottomNavigationAction
            label="Blog"
            value="blog"
            icon={<Icon>favorite</Icon>}
          />
          <BottomNavigationAction
            label="More"
            value="more"
            icon={<Icon>more_horiz</Icon>}
          />
        </BottomNavigation>
      </MuiThemeProvider>
    );
  }
}

LabelBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LabelBottomNavigation);
