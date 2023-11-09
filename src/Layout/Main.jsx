import { Outlet } from "react-router-dom";
import Footer from "../components/pages/Shared/Footer";
import Navbar from "../components/pages/Shared/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;