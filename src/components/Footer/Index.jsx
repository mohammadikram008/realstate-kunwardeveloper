import React,{useEffect} from "react";
import {
  Container,
  FormControl,
  Input,
  createTheme,
  ThemeProvider,
  Button,
  FormLabel,
  Typography,
  Box,
  Link,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import MessageIcon from "@mui/icons-material/Message";
import SendIcon from "@mui/icons-material/Send";
import "./Index.scss";
import { pink } from "@mui/material/colors";
import logo from '../other/ic_launcher.png'
//icon 
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function Footer() {
  // useEffect(() => {
  //   const element = document.getElementById('contactus');
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }, []);
  const theme = createTheme({
    palette: {
      primary: {
        main: "#5a48a7",
      },
      secondary: pink,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Box
        id="contactus"
        className="contact"
        width={"100vw"}
        padding={"0px"}
        sx={{
          position: "relative",
          bottom: "0px",
          left: "0px",

          color: "#FCD6C5",
          margin: "0px 0px 0px 0px",
        }}
      >
        {/* <Container>
          <form
            action=""
            method="post"
            className="form"
            maxWidth="100%"
          >
            <FormLabel>
              <Typography
                variant="h6"
                component="h1"
                color="primary"
                sx={{
                  fontSize: "25px",
                }}
              >
                Any Review
              </Typography>
            </FormLabel>
            <FormControl
              color="primary"
              variant="standard"
              sx={{
                margin: "6px 0px",
                padding: "2px 4px",
              }}
              focused
            >
              <Input
                sx={{
                  margin: "10px 0px",
                  width: "50%",
                  color: "black",
                  padding: "2px 5px",
                }}
                type="email"
                startAdornment={
                  <EmailIcon
                    sx={{
                      color: "black",
                      paddingRight: "8px",
                    }}
                  />
                }
                placeholder="Email"
                required
              />
            </FormControl>
            <FormControl
              color="primary"
              variant="standard"
              sx={{
                width: "50%",
                color: "black",
                margin: "10px 0px",
                padding: "2px 4px",
              }}
              focused
            >
              <Input
                sx={{
                  padding: "2px 5px",
                  color: "black",
                }}
                type="text"
                startAdornment={
                  <MessageIcon
                    sx={{
                      color: "black",
                      paddingRight: "8px",
                    }}
                  />
                }
                placeholder="Enter your message"
                required
              />
            </FormControl>
            <FormControl>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{
                  width: "110px",
                }}
              >
                Send &nbsp;{<SendIcon />}
              </Button>
            </FormControl>
          </form>
        </Container> */}
        <Container
          sx={{
            
            backgroundColor: "#ffff",
            margin: "0px",
            padding: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          maxWidth="100%"
        >
          <Typography >
          
            <footer>
              <div class="container">
                <div class="footer-item">
                  <div className="footer-logo">
                    <img src={logo} alt="" />
                  </div>
                  <div class="col-md-4 ">
                    <div class="footer_widget">
                      <h5>Head Office Address</h5>
                      <address className="text-head">
                      Office1201,12th Floor  Green Trust Tower,Jinnah Avenue <br/> Sector F-6/1 , Islamabad ICT Pakistan
                
                      </address>
                    </div>
                  </div>

                  <div class="col-md-4 itemdetail">
                    <div class="footer_widget">
                      <h5>Contact Us</h5>
                      <ul>
                        <li>
                          Tel:
                          <a class="contact_event_btn" href="tel:+92518859999"> 051 885 666 </a>
                        </li>

                        <li>
                          Email:

                          <a class="contact_event_btn" href="mailto:sales@KunwarDeveloper.com">sales@KunwarDeveloper.com</a>
                        </li>

                        <li>
                          Whatsapp:
                          <a class="contact_event_btn" href="https://api.whatsapp.com/send?phone=923315435910&amp;text=Hi%2C%20I%E2%80%99m%20interested%20in%20Zem%20Builders%20kindly%20send%20me%20more%20information%20about%20the%20project%2C%20pricing%20and%20availability.%20Thank%20you!">+92 3315435910</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div  className="itemdetail">
                    <div class="footer_social">
                    <h5>Social links</h5>
                      <ul>
                        <li>
                          <a href="" target="_blank">
                         <TwitterIcon/>
                          </a>
                        </li>

                        <li>
                          <a href="" target="_blank">
                            <FacebookOutlinedIcon/>
                          </a>
                        </li>

                        <li>
                          <a href="" target="_blank">
                           <InstagramIcon/>
                          </a>
                        </li>

                        <li>
                          <a href="" target="_blank">
                            <LinkedInIcon/>
                          </a>
                        </li>
                       
                      </ul>
                    </div>
                  </div >
                </div>

                <div class="">
                  <div class=" footer-copyright">
                  <p>&copy; 2023 Kunwar Developer. All Rights Reserved. </p>
                    {/* <div class="copyright">Copyright © 2023 Zem Builders</div> */}
                  </div>


                </div>
              </div>
            </footer>
             
            {/* <Link
              underline="none"
              sx={{ color: "#1F93FF" }}
              href="https://www.linkedin.com/in/yana-gupta/"
              target="_blank"
            >
              Yana Gupta
            </Link> */}
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
