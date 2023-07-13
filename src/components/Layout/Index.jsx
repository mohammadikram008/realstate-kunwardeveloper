import { Outlet } from "react-router-dom";
import Footer from "../Footer/Index";
import Navbar from "../Navbar/Index";
import Home from '../Home/Index'
function Layout() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <Footer />
    </div>
  );
}

export default Layout;
