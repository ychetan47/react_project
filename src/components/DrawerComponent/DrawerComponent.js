import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import thumbNail2 from "../../assets/thumbnail2.png";
import icon from "../../assets/icon.png";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import thumbnail from "../../assets/man.png";

const useStyles = makeStyles((theme) => ({
  menuIconContainer: {
    marginLeft: "auto",
  },
  root1: {
    backgroundColor: "#111C07",
  },
  drawer: {
    width: "180px",
  },
  thumbnail: {
    position: "absolute",

    boxSizing: "border-box",
    zIndex: -1,
    top: "350px",
    // left: "5px",
    // width: "352px",
    // height: "409px",
    maxWidth: "100%",
    minWidth: "200px",
    height: "auto",
  },
  thumbnail2: {},
  text1: {
    // border: "1px solid red",
    boxSizing: "border-box",
    // width: "300px",
    padding: "15px 0px",
    margin: "20px 10px",
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: "35px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "35px",
    marginTop: "55px",
  },
  text2: {
    // border: "1px solid green",
    padding: "15px 0px",
    margin: "20px 10px",
    fontFamily: "Roboto",
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: "18px",
    marginTop: "-20px",
    lineHeight: "25px",
  },
  btn2: {
    // border: "1px solid red",
    backgroundColor: "#111E07",
    textTransform: "none",
    marginLeft: "13px",
    width: "120px",
    height: "25px",
    borderRadius: "2px",
    color: "#FFFFFF",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: "10px",
    fontWeight: "500",
  },
  btn3: {
    // border: "1px solid red",
    marginTop: "15px",
    textTransform: "none",
    width: "120px",
    marginLeft: "13px",
    height: "25px",
    borderRadius: "2px",
    color: "#111E07",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: "10px",
    fontWeight: "500",
    border: "2px solid #111E07",
  },
  contentContainer: {
    position: "relative",
    // border: "1px solid red",
    boxSizing: "border-box",
    // top: "203px",
    width: "100%",
    marginTop: "70%",
  },
  heading: {
    marginTop: "5px",
    // border: "1px solid green",
    boxSizing: "border-box",
    width: "75%",
    fontFamily: "Roboto",
    fontSize: "25px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "50px",
    textAlign: "center",
  },
  content: {
    // border: "1px solid black",
    boxSizing: "border-box",
    marginTop: "-20px",
    padding: "10px 20px",
    fontFamily: "Roboto",
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: "15px",
    lineHeight: "22px",
  },
  iconContainer: {
    // border: "1px solid black",
    boxSizing: "border-box",
    padding: "0px 50px",
    marginTop: "15px",
  },
  icon: {
    marginLeft: "45%",
  },

  iconTitle: {
    // border: "1px solid green",
    boxSizing: "border-box",
    textAlign: "center",

    // width: "50%",

    fontFamily: "Roboto",
    fontWeight: "500",
    fontStyle: "normal",
    fontSize: "16px",
    lineHeight: "26px",
    color: "#091133",
  },
  iconContent: {
    // border: "1px solid red",
    boxSizing: "border-box",
    textAlign: "center",

    marginTop: "-10px",
    fontFamily: "Roboto",
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: "12px",
    lineHeight: "18px",
    color: "#5D6970",
  },
  thumbNail2: {
    width: "60%",
    height: "auto",
    float: "right",
    zIndex: -1,
  },
  borderHeading: {
    // fontSize: "30px",
    fontWeight: "500px",
  },
  cartIcon: {
    // border: "1px solid red",
    marginLeft: "200px",
    // marginRight: "-20px",
  },
}));

const DrawerComponent = () => {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(true);

  return (
    <>
      <Drawer
        // className={classes.drawer}
        anchor="right"
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
      >
        <List className={classes.drawer}>
          <ListItem divider button>
            <ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItemIcon>
          </ListItem>
          <ListItem divider button>
            <ListItemIcon>
              <ListItemText>About</ListItemText>
            </ListItemIcon>
          </ListItem>
          <ListItem divider button>
            <ListItemIcon>
              <ListItemText>Contact</ListItemText>
            </ListItemIcon>
          </ListItem>
        </List>
      </Drawer>
      <AppBar className={classes.root1} position="fixed">
        <Toolbar>
          <p className={classes.borderHeading}>LAND</p>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            className={classes.cartIcon}
            aria-haspopup="true"
            color="inherit"
          >
            <ShoppingCartIcon />
          </IconButton>
          <IconButton
            edge="end"
            className={classes.menuIconContainer}
            color="inherit"
            // aria-label="menu"
            onClick={() => setOpenDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <img className={classes.thumbnail} src={thumbnail} alt="thumbNail" />
      {/* <div className={classes.container}> */}
      <p className={classes.text1}>
        Introduce Your Product
        <br />
        Quickly & Effectively
      </p>
      <p className={classes.text2}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim.
      </p>
      <Button
        className={classes.btn2}
        disableRipple
        disableFocusRipple
        disableElevation
        variant="contained"
      >
        Purchase UI Kit
      </Button>
      <br></br>
      <Button
        className={classes.btn3}
        disableRipple
        disableFocusRipple
        disableElevation
        variant="outlined"
      >
        Learn More
      </Button>
      <div className={classes.contentContainer}>
        <p className={classes.heading}>Light, fast & Powerful</p>
        <p className={classes.content}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim..
        </p>
      </div>
      <img className={classes.thumbNail2} src={thumbNail2} alt="thumbnail2" />

      <div className={classes.iconContainer}>
        <img className={classes.icon} src={icon} alt="icon" />
        <p className={classes.iconTitle}>Title Goes Here</p>
        <p className={classes.iconContent}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor.
        </p>
      </div>
      <div className={classes.iconContainer}>
        <img className={classes.icon} src={icon} alt="icon" />
        <p className={classes.iconTitle}>Title Goes Here</p>
        <p className={classes.iconContent}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor.
        </p>
      </div>
    </>
  );
};

export default DrawerComponent;
