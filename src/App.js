import React, { Fragment, Suspense } from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Layout from "./components/Layout/Index";
import Home from "./components/Home/Index";
import About from './components/About/Index';
import Property from "./components/Property/Index";
import Agent from "./components/Agent/Index";
import SignUp from "./components/SignUp/Index";
import Login from "./components/Login/Index";
import Navbar from './components/Navbar/Index';
import Qualitys from './components/Quality/Index'
import './App.scss'
import Fallback from "./components/Fallback";
import Contact from './components/Contact'
import Footer from "./components/Footer/Index";

function App() {
  return (
    
      <Fragment>
            <Suspense fallback={<Fallback />} >

                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/property" element={<Property />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/quality" element={<Qualitys/>} />
                    <Route path="/agent" element={<Agent />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/contact" element={<Contact />} />

                    {/* <Route path="/" element={<Layout />} ></Route> */}
                </Routes>
                <Footer />
            </Suspense>
        </Fragment>

  );
}

export default App;
