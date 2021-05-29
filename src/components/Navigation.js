import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import thumbnail from "../assets/man.png";
import thumbNail2 from "../assets/thumbnail2.png";
import icon from "../assets/icon.png";

import {
  AppBar,
  Avatar,
  Button,
  Grid,
  makeStyles,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import DrawerComponent from "./DrawerComponent/DrawerComponent";

const useStyles = makeStyles((theme) => ({
  thumbnail: {
    position: "absolute",
    boxSizing: "border-box",
    width: "60%",
    height: "auto",
    zIndex: -1,
    top: "-5px",
    right: "10px",
  },
  thumbNail2: {
    position: "relative",
    // border: "1px solid red",
    boxSizing: "border-box",
    width: "100%",
    margin: "10% 10%",
    marginTop: "40px",
    marginRight: "55px",

    // height: "40%",
    //   zIndex: -1,
    //   // top: "140%",
    //   marginTop: "-28%",
    //   // left: "60%",
    //   float: "right",
  },

  root: {
    flexGrow: 1,
    position: "static",
    // border: "1px solid red",
    marginRight: "0px -5%",
  },
  tabsContainer: {
    // flexGrow: 1,
    // color: "black",
    display: "flex",
    boxSizing: "border-box",

    marginLeft: "102px",
    width: "15%",
    // left: "134px",
    minWidth: "190px",
    // border: "1px solid green",
  },
  tabs: {
    // margin: "5px",
    flexGrow: 1,
    // maxWidth: "80px",
    textTransform: "none",
    color: "#37447E",
    fontStyle: "normal",
    fontSize: "14px",
    fontFamily: "Roboto",
    fontWeight: "400",
    lineHeight: "24px",
    textAlign: "left",

    // border: "1px solid green",
  },

  title: {
    flexGrow: 1,
    color: "#111B47",
    fontWeight: "900",
    fontFamily: "Roboto",
    fontStyle: "Bold",
    fontSize: "26px",
    lineHeight: "38px",
    width: "100%",
    height: "38px",
    textAlign: "center",
    maxWidth: "800px",
    margin: "10px 100px",
    marginLeft: "8px",
    // marginLeft: "300px",

    // border: "1px solid blue",
  },
  btn: {
    textTransform: "none",
    // border: "1px solid black",
    width: "160px",
    height: "26px",
    color: "#FFFFFF",
    backgroundColor: "#111B47",
    borderRadius: "1px",

    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: "12px",
    fontWeight: "500",
  },
  container: {
    // border: "1px solid blue",

    boxSizing: "border-box",
    width: "66%",
    height: "auto",

    marginLeft: "134px",
    marginTop: "17%",
    // marginRight: "0px",
  },
  text1: {
    width: "72%",
    height: "30%",
    minWidth: "400px",
    minHeight: "100px",

    marginTop: "0px",

    // border: "1px solid red",
    boxSizing: "border-box",

    fontFamily: "Roboto",
    fontSize: "50px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "66px",
  },
  text2: {
    width: "40%",
    height: "30%",

    minWidth: "450px",
    minHeight: "100px",

    // border: "1px solid green",
    fontFamily: "Roboto",
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: "18px",
    marginTop: "-20px",
    lineHeight: "30px",
  },
  btn2: {
    // border: "1px solid black",

    backgroundColor: "#111B47",
    textTransform: "none",
    width: "189px",
    height: "30px",
    borderRadius: "2px",
    color: "#FFFFFF",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: "16px",
    fontWeight: "500",
  },
  btn3: {
    marginLeft: "20px",
    textTransform: "none",
    width: "189px",
    height: "30px",
    borderRadius: "2px",
    color: "#111B47",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: "16px",
    fontWeight: "500",
    border: "2px solid #111B47",
  },
  container2: {
    display: "flex",

    marginTop: "22%",
    // border: "1px solid red",
    boxSizing: "border-box",
    // width: "44%",
    // height: "auto",

    // marginLeft: "134px",

    // marginRight: "0px",
    // width: "85%",

    minWidth: "500px",
  },
  heading2: {
    // border: "1px solid green",
    boxSizing: "border-box",
    width: "90%",
    marginTop: "12%",
    // height: "30%",
    minWidth: "300px",
    minHeight: "auto",

    fontFamily: "Roboto",
    fontSize: "36px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "66px",
  },
  content: {
    // border: "1px solid black",
    paddingRight: "20px",
    width: "90%",
    height: "auto",
    boxSizing: "border-box",
    minWidth: "350px",

    marginTop: "10px",

    // border: "1px solid green",
    fontFamily: "Roboto",
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: "18px",
    lineHeight: "26px",
  },
  iconContainer: {
    // border: "1px solid green",
    display: "flex",

    width: "100%",
    marginTop: "65px",
  },
  icon1: {
    // border: "1px solid red",
    flexGrow: 1,
    width: "10%",
  },
  icon2: {
    width: "10%",
    // border: "1px solid blue",
    flexGrow: 1,
  },
  iconTitle: {
    width: "90%",
    // border: "1px solid blue",

    fontFamily: "Roboto",
    fontWeight: "500",
    fontStyle: "normal",
    fontSize: "16px",
    lineHeight: "26px",
    color: "#091133",
  },
  iconContent: {
    // border: "1px solid blue",
    fontFamily: "Roboto",
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: "12px",
    lineHeight: "18px",
    color: "#5D6970",
    paddingRight: "20px",
  },
  contentContainer: {
    marginLeft: "134px",
  },
  // imgContainer: {
  //   width: "100%",
  //   border: "1px solid green",
  // },
}));

export default function DisabledTabs() {
  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("xs"));
  console.log(isMatch);

  const classes = useStyles();
  return (
    <>
      {isMatch ? (
        <DrawerComponent />
      ) : (
        <>
          <div className={classes.root} position="static">
            <Toolbar>
              <div className={classes.tabsContainer}>
                <p className={classes.tabs}>Home</p>
                <p className={classes.tabs}>About</p>
                <p className={classes.tabs}>Contact</p>
              </div>
              <Typography className={classes.title}>LAND</Typography>
              <Button
                variant="contained"
                className={classes.btn}
                disableElevation
                disableFocusRipple
                disableRipple
              >
                <p>Buy Now</p>
              </Button>
            </Toolbar>
          </div>

          <img className={classes.thumbnail} src={thumbnail} alt="thumbNail" />
          <div className={classes.container}>
            <p className={classes.text1}>
              Introduce Your Product
              <br />
              Quickly & Effectively
            </p>
            <p className={classes.text2}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque */}
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
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
            <Button
              className={classes.btn3}
              disableRipple
              disableFocusRipple
              disableElevation
              variant="outlined"
            >
              Learn More
            </Button>
          </div>

          <div className={classes.container2}>
            <div className={classes.contentContainer}>
              <div className={classes.heading2}>Light, Fast & Powerful</div>
              <p className={classes.content}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis,
                <br /> ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                consequat massa quis enim.
              </p>
              <div className={classes.iconContainer}>
                <div className={classes.icon1}>
                  <img className={classes.icon} src={icon} alt="icon" />
                  <p className={classes.iconTitle}>Title Goes Here</p>
                  <p className={classes.iconContent}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor.
                  </p>
                </div>
                <div className={classes.icon2}>
                  <img className={classes.icon} src={icon} alt="icon" />
                  <p className={classes.iconTitle}>Title Goes Here</p>
                  <p className={classes.iconContent}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor.
                  </p>
                </div>
              </div>
            </div>
            {/* <div className={classes.imgContainer}> */}
            <img
              className={classes.thumbNail2}
              src={thumbNail2}
              alt="thumbNail2"
            />
            {/* </div> */}
          </div>
        </>
      )}
    </>
  );
}
