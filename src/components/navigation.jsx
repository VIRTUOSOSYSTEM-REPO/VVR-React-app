import React, {  useState } from "react";

import "./navigation.css";

import Fade from "react-reveal/Fade";
import { IoMenuSharp, IoHomeSharp } from "react-icons/io5";
import { HiDocumentText } from "react-icons/hi";
import { BsFillGearFill } from "react-icons/bs";
import { MdPhone } from "react-icons/md";
import { FaUser, FaFolderOpen } from "react-icons/fa";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CloseIcon from "@material-ui/icons/Close";
import Logo from "../../src/cctv/vvrlogo.jpg";
export const Navigation = (props) => {

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
    // setHandleDrawer();
  };

  const handleDrawerClose = () => {
    setOpen(false);
    // setHandleDrawer();
  };

  const useStyles = makeStyles((t) => ({
    navMenu: {
      float: "right",
      marginRight: "10px",
      fontSize: "2.5rem",
      color: "#000000",
      cursor: "pointer",
      zIndex: "999",
      transform: "translateY(-10px)",
      transition: "color 0.3s",
      "&:hover": {
        color: "#FFFFFF",
      },
      [t.breakpoints.down("sm")]: {
        fontSize: "2.5rem",
      },
      [t.breakpoints.down("xs")]: {
        fontSize: "2rem",
      },
    },
    MuiDrawer: {
      padding: "0em 1.8em",
      width: "14em",
      fontFamily: " var(--primaryFont)",
      fontStyle: " normal",
      fontWeight: " normal",
      fontSize: " 24px",
      background: "#FFFFFF",
      overflow: "hidden",
      borderTopRightRadius: "40px",
      borderBottomRightRadius: "40px",
      [t.breakpoints.down("sm")]: {
        width: "12em",
      },
    },
    closebtnIcon: {
      zIndex: "2000",
      fontSize: "2rem",
      fontWeight: "bold",
      cursor: "pointer",
      color: "#000000",
      position: "absolute",
      right: 40,
      top: 40,
      transition: "color 0.2s",
      "&:hover": {
        color: "#FFFFFF",
      },
      [t.breakpoints.down("sm")]: {
        right: 20,
        top: 20,
      },
    },
    drawerItem: {
      margin: "2rem auto",
      borderRadius: "78.8418px",
      background: "#FFFFFF",
      color: "#000000",
      width: "85%",
      height: "60px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      padding: "0 30px",
      boxSizing: "border-box",
      border: "2px solid",
      borderColor: "#FFFFFF",
      transition: "background-color 0.2s, color 0.2s",
      "&:hover": {
        background: "#FFFFFF",
        color: "#000000",
      },
      [t.breakpoints.down("sm")]: {
        width: "100%",
        padding: "0 25px",
        height: "55px",
      },
    },
    drawerLinks: {
      fontFamily: "var(--primaryFont)",
      width: "50%",
      fontSize: "1.3rem",
      fontWeight: 700,
      [t.breakpoints.down("sm")]: {
        fontSize: "1.5rem",
      },
    },
    drawerIcon: {
      fontSize: "1.6rem",
      [t.breakpoints.down("sm")]: {
        fontSize: "1.385rem",
      },
    },
  }));

  const classes = useStyles();
  const [click, setClick] = useState(false);
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 950) {
      setVisible(true);
    } else if (scrolled <= 950) {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    setVisible(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", toggleVisible, scrollToTop);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav
        className="navbar "
        style={{
          backgroundColor: visible ? "#FFFF" : "",
          zIndex: "999",
          color: visible ? "#F5B921" : "#F5B921",
        }}
      >
        <div className="nav-container">
          <a exact href="/" className="nav-logo d-flex">
            <img style={{ width: "60px", marginBottom: "20px" }} src={Logo} alt="logo" />
            {/* <i className="fas fa-code"></i> */}
           <div className="company-section">
             <span className="">VVR Home Care</span>
             <div>+91 94883 43729</div>
           </div>
          </a>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a
                exact
                href="#about"
                activeClassName="active"
                style={{ color: visible ? "#F70000" : "rgb(38, 14, 172)",fontWeight: 500 }}
                className="nav-links page-scroll"
                onClick={handleClick}
              >
                About
              </a>
            </li>

            <li className="nav-item">
              <a
                exact
                href="#gallery"
                style={{ color: visible ? "#F70000" : "rgb(38, 14, 172)",fontWeight: 500 }}
                activeClassName="active"
                className="nav-links page-scroll"
                onClick={handleClick}
              >
                Gallery
              </a>
            </li>

            <li className="nav-item">
              <a
                exact
                href="#services"
                style={{ color: visible ? "#F70000" : "rgb(38, 14, 172)",fontWeight: 500 }}
                activeClassName="active"
                className="nav-links page-scroll"
                onClick={handleClick}
              >
                Services
              </a>
            </li>
          
            <li className="nav-item">
              <a
                exact
                href="#contact"
                style={{ color: visible ? "#F70000" : "rgb(38, 14, 172)",fontWeight: 500 }}
                activeClassName="active"
                className="nav-links  page-scroll"
                onClick={handleClick}
              >
                Contact Us
              </a>
            </li>
          </ul>
          <IoMenuSharp
            className={classes.navMenu}
            onClick={handleDrawerOpen}
            aria-label="Menu"
          />
        </div>
      </nav>
      <Drawer
        variant="temporary"
        onClose={(event, reason) => {
          if (reason !== "backdropClick") {
            handleDrawerClose();
          } else if (reason !== "escapeKeyDown") {
            handleDrawerClose();
          }
        }}
        anchor="left"
        open={open}
        classes={{ paper: classes.MuiDrawer }}
        className="drawer element index1"
        disableScrollLock={true}
      >
        <div className="div-closebtn index1">
          <CloseIcon
            onClick={handleDrawerClose}
            onKeyDown={(e) => {
              if (e.key === " " || e.key === "Enter") {
                e.preventDefault();
                handleDrawerClose();
              }
            }}
            className={classes.closebtnIcon}
            role="button"
            tabIndex="0"
            aria-label="Close"
          />
        </div>
        <br />

        <div onClick={handleDrawerClose}>
          <div className="navLink--container">
            {/* <Fade left>
              <a href="/" className='page-scroll'>
                <div className={classes.drawerItem}>
                  <IoHomeSharp className={classes.drawerIcon} />
                  <span className={classes.drawerLinks}>Home</span>
                </div>
              </a>
            </Fade> */}

            <Fade left>
              <a href="#about"  className='page-scroll'>
                <div className={classes.drawerItem}>
                  <FaUser className={classes.drawerIcon} />
                  <span className={classes.drawerLinks}>About</span>
                </div>
              </a>
            </Fade>

            {/* <Fade left>
              <a
                href="#UpcomingProject"
                className='page-scroll'
              >
                <div className={classes.drawerItem}>
                  <HiDocumentText className={classes.drawerIcon} />
                  <span className={classes.drawerLinks}>Projects</span>
                </div>
              </a>
            </Fade> */}
            <Fade left>
              <a href="#gallery" className='page-scroll'>
                <div className={classes.drawerItem}>
                  <FaFolderOpen className={classes.drawerIcon} />
                  <span className={classes.drawerLinks}>Gallery</span>
                </div>
              </a>
            </Fade>

            <Fade left>
              <a href="#services" className='page-scroll'>
                <div className={classes.drawerItem}>
                  <BsFillGearFill className={classes.drawerIcon} />
                  <span className={classes.drawerLinks}>Services</span>
                </div>
              </a>
            </Fade>

            {/* <Fade left>
              <a
                href="#Fogworkshop"
                className='page-scroll'
              >
                <div className={classes.drawerItem}>
                  <FaFolderOpen className={classes.drawerIcon} />
                  <span className={classes.drawerLinks}>Workshop</span>
                </div>
              </a>
            </Fade> */}

            <Fade left>
              <a href="#contact" className='page-scroll'>
                <div className={classes.drawerItem}>
                  <MdPhone className={classes.drawerIcon} />
                  <span className={classes.drawerLinks}>Contact</span>
                </div>
              </a>
            </Fade>
          </div>
        </div>
      </Drawer>
    </>
  );
}

export default Navigation;
