import React, { useState, useEffect, Fragment, useRef } from 'react';
import { Container, Typography } from "@mui/material";
import $ from 'jquery';
import Client from "./Clients/Index";
import "./Index.scss";
import Footer from "../Footer/Index";
import Comingsoon from '../ComingSoon/Index'
import Property from "../Property/Index";
import cleint from '../other/customer-retention.png'
import customer from '../other/costumer.png'
import rating from '../other/rating.png'
import customerreview from '../other/customer-review.png'
import { Col, Row } from 'reactstrap';
import Content from '../Content'
import Building from '../Property/Building/Index';
import Hero from '../Hero/Index'
import videoFile from '../other/herovideo.mp4';
// import { Col, Row } from 'reactstrap';
function Home() {
  const [count, setCount] = useState(0),
    [kanals, setKanals] = useState(0),
    [land, setLand] = useState(0),
    [count3, setCount3] = useState(0);
  const counterRef = useRef(null);
  const counterReflands = useRef(null);
  const counterRefsqf = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    const $counter = $(counterRef.current);

    // Initialize counter value
    let count = 0;
    $counter.text(count);

    // Start the counter
    const interval = setInterval(() => {
      count += 50;
      $counter.text(count);

      // Stop the counter at a specific value
      if (count === 8800) {
        clearInterval(interval);
      }
    }, 10);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const $counter = $(counterReflands.current);

    // Initialize counter value
    let count = 0;
    $counter.text(count);

    // Start the counter
    const interval = setInterval(() => {
      count += 50;
      $counter.text(count);

      // Stop the counter at a specific value
      if (count === 10000) {
        clearInterval(interval);
      }
    }, 10);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const $counter = $(counterRefsqf.current);

    // Initialize counter value
    let count = 0;
    $counter.text(count);

    // Start the counter
    const interval = setInterval(() => {
      count += 1000;
      $counter.text(count);

      // Stop the counter at a specific value
      if (count >= 425220) {
        clearInterval(interval);
      }
    }, 10);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);
  // useEffect(() => {
  //   if (count === 100) {
  //     return; // Stop the counter when count reaches 100
  //   }

  //   if (scrollPosition % 100 === 0 && scrollPosition > 0) {
  //     setCount((prevCount) => prevCount + 1);
  //   }
  // }, [scrollPosition, count]);
  // useEffect(() => {
  //   if (kanals === 8800) {
  //     return; // Stop the counter when count reaches 100
  //   }

  //   if (scrollPosition % 100 === 0 && scrollPosition > 0) {
  //     setKanals((prevCount) => prevCount + 100);
  //   }
  // }, [scrollPosition, kanals]);
  // useEffect(() => {
  //   if (land === 10000) {
  //     return; // Stop the counter when count reaches 100
  //   }

  //   if (scrollPosition % 100 === 0 && scrollPosition > 30) {
  //     setLand((prevCount) => prevCount + 100);
  //   }
  // }, [scrollPosition, land]);
  return (
    <Fragment>


      <div className="hero-container">
        <video className='video-section' data-v-9e68f8c8="" loop="loop" muted="muted" autoplay="autoplay" playsinline="" fixed="false" scale="false" >
          <source data-v-9e68f8c8="" src={videoFile} type="video/mp4" />
        </video>
        {/* <div className=''>
      <video controls className='video-section'>
        <source src={videoFile} type="video/mp4" />
      </video>
    </div> */}
        {/* <div className="home">
        <h1>
        BRINGING THE BEST OF DESIGN, ARCHITECTURE AND CONSTRUCTION TO THOSE WHO SEEK THE VERY BEST
        </h1>
        <h2>Unlock your dream with us.</h2>
      </div> */}

        <Container maxWidth="xl">
          <Container maxWidth="xl">
            <Hero />
            <Content />
            <Typography variant="h5" component="h1" align="center" marginY={10} className='text-heading'>
              Our Current Projects
            </Typography>
            <Building />
            <div data-v-9e68f8c8="" class="text-center logos-container justify-content-center align-items-center row">
              <div className='company-col'>
              <div data-v-9e68f8c8="" class="col-sm-3 col-6 logo">
                <img data-v-9e68f8c8="" src="https://d3lfybzdo3x59a.cloudfront.net/website-assets/Zed_B&amp;Wfinal.png" class="img-fluid" />
              </div>
              <div data-v-9e68f8c8="" class="col-sm-3 col-6 logo2">
                <img data-v-9e68f8c8="" src="https://d3lfybzdo3x59a.cloudfront.net/website-assets/SS_B&amp;Wfinal.png" class="img-fluid" />
              </div>
              <div data-v-9e68f8c8="" class="col-sm-3 col-6 logo3">
                <img data-v-9e68f8c8="" src="https://d3lfybzdo3x59a.cloudfront.net/website-assets/Pyramid Hills_B&amp;Wfinal.png" class="img-fluid" />
              </div>
              <div data-v-9e68f8c8="" class="col-sm-3 col-6 logo4">
                <img data-v-9e68f8c8="" src="https://d3lfybzdo3x59a.cloudfront.net/website-assets/Solana Logox1.png" class="img-fluid" />
              </div>
              </div>
              <div className='company-col'>
              <div data-v-9e68f8c8="" class="col-sm-3 col-6 logo5">
                <img data-v-9e68f8c8="" src="https://d3lfybzdo3x59a.cloudfront.net/website-assets/YI_LOGO.png" class="img-fluid" />
              </div>
              <div data-v-9e68f8c8="" class="col-sm-3 col-6 logo6">
                <img data-v-9e68f8c8="" src="https://d3lfybzdo3x59a.cloudfront.net/website-assets/Beach House_B&amp;Wfinal.png" class="img-fluid" />
              </div>
              <div data-v-9e68f8c8="" class="col-sm-3 col-6 logo7">
                <img data-v-9e68f8c8="" src="https://d3lfybzdo3x59a.cloudfront.net/website-assets/Ayia Napa_B&amp;Wfinal.png" class="img-fluid" />
              </div>
              <div data-v-9e68f8c8="" class="col-sm-3 col-6 logo8">
                <img data-v-9e68f8c8="" src="https://d3lfybzdo3x59a.cloudfront.net/website-assets/Eighteen_B&amp;Wfinal.png" class="img-fluid" />
              </div>
              </div>
            </div>


            <Row className='m-0  counter-item'>
              {/* <Col md='2'></Col> */}
              <Col md='12' sm="12" lg="12"  >
                <div className='detail-card'>
                  {/* <img src={cleint} ></img> */}
                  <span className=''> <h1 ref={counterRef} /><h1>+</h1></span>
                  <p>Delivered kanals</p>

                </div>
              </Col>
              <Col md='12' lg="12" className=''>
                <div className='detail-card'>
                  {/* <img src={rating}></img> */}
                  {/* <h1>{count}+</h1> */}
                  <span className=''><h1 ref={counterRefsqf} /><h1>+</h1></span>

                  {/* <h1>425220+</h1> */}
                  <p>Sqft Units</p>

                </div>
              </Col>
              <Col md='12'> <div className='detail-card'>
                {/* <img src={customer}></img> */}
                {/* <h1>{count}%</h1> */}
                <span className=''> <h1 ref={counterReflands} /><h1>+</h1></span>

                {/* <h1>{land}+</h1> */}
                <p>Lands planning</p>

              </div></Col>
              {/* <Col md='12' sm="12"> <div className='detail-card'>
                <img src={customerreview}></img>
                <h1>{count}+</h1>
                <p>Completed Contracts</p>

            </div></Col> */}
              {/* <Col md='2'></Col> */}
            </Row>
            {/* <Property/> */}
            {/* <Client /> */}
          </Container>
          <Comingsoon />
        </Container>

      </div>
    </Fragment>
  );
}

export default Home;
