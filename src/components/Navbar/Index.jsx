import { useState } from "react";
import { Container } from "@mui/system";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  useMediaQuery,
  Button,

} from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from "react-router-dom";
import "./Index.scss";
import logo from '../other/ic_launcher.png'
import NavbarContent from '../NavbarContent/Index'
export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const showUpMd = useMediaQuery("(min-Width: 701px)");
  const showDownMd = useMediaQuery("(max-Width: 700px)");

  async function handleClick() {
    await setNavbarOpen(!navbarOpen);
  }
  const handleChangeButton = () => {
    setNavbarOpen(false);
    setIsOpen(false);
  }
  return (
    <div className="nav-bar">
      <AppBar
        sx={{
          backgroundColor: "#ffff",
          padding: "0px 20px",
        }}
        className={navbarOpen ? "nav-bar-open" : ""}
      >
        <Container
          maxWidth="xl"
          sx={{
            color: "bisque",
            padding: "0px 20px",
            display: "flex",
            alignItems: "center",
            fontSize: "24px",
          }}
          className={navbarOpen ? "nav-bar-container" : ""}
          disableGutters
        >
          {(navbarOpen || showUpMd) && (
            <Link
              style={{
                textDecoration: "none",
              }}
              to="/"
            >
              <Typography
                color="whiteSmoke"
                sx={{
                  flexGrow: 1,
                  color: "black",
                  display: "block",
                  fontSize: "22px",
                  cursor: "pointer",
                  fontWeight: 600,
                }}
                className={navbarOpen ? "nav-home-link" : ""}
              >

                <div className='log-div'>
                  <img className="logo-img " src={logo} alt='' />
                  <h1 >Kunwar&nbsp;Developer</h1>
                </div>

              </Typography>
            </Link>
          )}

          {(showUpMd || navbarOpen) && (
            <Toolbar
              style={{
                display: "flex",
                color: "black",
                margin: "auto auto",
                alignItems: "center",
                zIndex: 121,
              }}
              className={navbarOpen ? "toolbar" : ""}
            >
              {/* <Link
                to="/"
                underline="none"
                className={navbarOpen ? "toolbar-btn" : ""}
              >
                <Button
                  onClick={handleChangeButton}
                  className="nav-item"
                  color="inherit"
                  variant="text"
                  style={{
                    color: "black",
                    margin: "auto 23px",
                    fontSize: "16px",
                  }}
                >
                  Home
                </Button>
              </Link> */}

              <Link
                to="/property"
                underline="none"
                className={navbarOpen ? "toolbar-btn" : ""}
              >
               

                <Button
                  className="nav-item"
                  onClick={toggleDropdown}
                  // onClick={handleChangeButton}
                  color="inherit"
               
                  variant="text"
                  style={{
                    color: "black",
                    margin: "auto 23px",
                    fontSize: "1.2rem",
                    fontFamily: "PublicSans,sans-serif",
                    
                  }}
                >
                  Projects<ArrowDropDownIcon/>
                </Button>
              </Link>

              <Link
                to="/quality"
                underline="none"
                className={navbarOpen ? "toolbar-btn" : ""}
              >
                <Button
                  className="nav-item"
                  color="inherit"
                  onClick={handleChangeButton}
                  variant="text"
                  style={{
                    color: "black",
                    margin: "auto 23px",
                    
                    fontSize: "1.2rem",
                  }}
                >
                  Quality
                </Button>
              </Link>

              <Link

                to="/about"
                underline="none"
                className={navbarOpen ? "toolbar-btn" : ""}
              >
                <Button
                  className="nav-item"
                  variant="text"
                  onClick={handleChangeButton}
                  style={{
                    color: "black",
                    margin: "auto 23px",
                    fontSize: "1.2rem",
                  }}
                >
                  About Us
                </Button>
              </Link>
              <Link

                to="/contact"
                underline="none"
                className={navbarOpen ? "toolbar-btn" : ""}
              >
                <Button
                  className="nav-item"
                  variant="text"
                  onClick={handleChangeButton}
                  style={{
                    color: "black",
                    margin: "auto 23px",
                    fontSize: "1.2rem",
                  }}
                >
                  Contact Us
                </Button>
              </Link>
            </Toolbar>
          )}

          {showDownMd && (
            <Box width={"70%"}>
              <Button

                color="inherit"
                className="nav-open-btn nav-item"
                onClick={handleClick}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                id={navbarOpen ? "nav-btn-open" : ""}
              >
                <Typography className="ham" id={navbarOpen ? "active" : ""} />
                <Typography className="ham" id={navbarOpen ? "active" : ""} />
                <Typography className="ham" id={navbarOpen ? "active" : ""} />
              </Button>
            </Box>
          )}

          {!navbarOpen && (
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                right: "20px",
              }}
            >
              {/* <Link href="/login" underline="none">
                <Button
                  style={{
                    backgroundColor: "#D1D4DB",
                    height: "80px",
                    borderRadius: "0px",
                    color: "#12172B",
                    textTransform: "none",
                  }}
                  className="btn-reg"
                  variant="contained"
                  disableElevation
                  disableFocusRipple
                >
                  Sign-In
                </Button>
              </Link> */}
              <Link to="/signup">
                <Button
                  
                  className="nav-item"
                  style={{
                    color: "black",
                    margin: "auto 23px",
                    fontSize: "16px",
                    fontWeight:"600",
                    border:"1px solid #A6A8AA",
                    borderRadius:"10px"

                  }}

                
                  disableElevation
                >
                  JoinUs
                </Button>
              </Link>
            </Box>
          )}
        </Container>
        {isOpen && (
                        <NavbarContent/>
                      )}
      </AppBar>
    
    </div>
  );
}
