import React , { useState, useEffect}from 'react';
import House from './House/Index'
import Apartment from './Apartment/Index';
import Land from './Land/Index';
import Building from './Building/Index';
import { Container } from '@mui/system';
import { Typography } from '@mui/material';
import './Index.scss';
import { Col, Row } from 'reactstrap';

// import web from '../assets/image/other/web-design.png'
// import rating from '../assets/image/other/rating.png'
// import customer from '../assets/image/other/costumer.png'
// import customerreview from '../assets/image/other/customer-review.png'

function Property() {
    const [count, setCount] = useState(0),
    [count1, setCount1] = useState(0),
    [count2, setCount2] = useState(0),
    [count3, setCount3] = useState(0);
   

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
    if (count === 100) {
      return; // Stop the counter when count reaches 100
    }

    if (scrollPosition % 100 === 0 && scrollPosition > 60) {
      setCount((prevCount) => prevCount + 1);
    }
  }, [scrollPosition, count]);
    return (
        <div id='page' style={{margin: "40px auto"}}>

            <Container maxWidth='xl'>
                {/* <Container
                    maxWidth='xl'
                    sx={{
                        background: '#D3DEEE',
                        borderRadius: '5px',
                        border: '1px solid #fffff',
                        margin: '8px 0px 20px 0px',
                        padding: '10px 0px 20px 0px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >

                    <Typography
                        variant='h4'
                        align='center'
                        maxWidth="md"
                        sx={{
                            backgroundColor: "#E2EDF3",
                            margin: '0px 20px',
                            color: '#002B3D',
                            borderRadius: "30px",
                            borderBottom: '3px solid #290000',
                            padding: '6px 30px',
                        }}
                        fullWidth >
                        Houses
                    </Typography>
                    <House />

                </Container>
                <Container
                    maxWidth="xl"
                    sx={{
                        background: '#D3DEEE',
                        borderRadius: '5px',
                        border: '1px solid #D3DEEE',
                        margin: '40px auto',
                        padding: '10px 0px 20px 0px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <Typography
                        variant='h4'
                        align='center'
                        maxWidth="md"
                        sx={{
                            backgroundColor: "#E2EDF3",
                            alignSelf: 'center',
                            justifySelf: 'center',
                            margin: '0px 20px 20px 20px',
                            color: '#002B3D',
                            borderRadius: "30px",
                            borderBottom: '3px solid #290000',
                            padding: '6px 30px'
                        }}>
                        Apartments
                    </Typography>
                    <Apartment />
                </Container> */}

                {/* <Container
                    maxWidth='xl'
                    sx={{
                        background: '#D3DEEE',
                        borderRadius: '5px',
                        border: '1px solid #fffff',
                        margin: '40px 0px',
                        padding: '10px 0px 20px 0px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>

                    <Typography
                        variant='h4'
                        align='center'
                        maxWidth="md"
                        sx={{
                            backgroundColor: "#E2EDF3",
                            color: '#002B3D',
                            borderRadius: "30px",
                            margin: '0px 20px 20px 20px',
                            borderBottom: '3px solid #290000',
                            padding: '6px 30px',
                        }}
                        fullWidth >
                        Lands
                    </Typography>
                    <Land />

                </Container> */}
                <Container
                    maxWidth='xl'
                    sx={{
                        background: '#D3DEEE',
                        borderRadius: '5px',
                        border: '1px solid #fffff',
                        margin: '40px 0px',
                        padding: '10px 0px 20px 0px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>

                    <Typography
                        variant='h4'
                        align='center'
                        maxWidth="md"
                        sx={{
                            backgroundColor: "#E2EDF3",
                            color: '#002B3D',
                            borderRadius: "30px",
                            margin: '0px 20px 20px 20px',
                            borderBottom: '3px solid #290000',
                            padding: '6px 30px',
                        }}
                        fullWidth >
                        Projects
                    </Typography>
                    <Building />

                </Container>
            </Container>
      
       

            {/* <Footer /> */}

        </div>
    )
}

export default Property;
