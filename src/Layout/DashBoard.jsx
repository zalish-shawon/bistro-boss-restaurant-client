import { FaAd, FaCalendar, FaHome, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {
    return (
        <div className="flex"> 
        {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
                        <li className=""><NavLink to={'/dashboard/userHome'}> <FaHome></FaHome> User home</NavLink></li>
                        <li className=""><NavLink to={'/dashboard/cart'}> <FaShoppingCart></FaShoppingCart> My cart</NavLink></li>
                        <li className=""><NavLink to={'/dashboard/reservation'}> <FaCalendar></FaCalendar> Reservation</NavLink></li>
                        <li className=""><NavLink to={'/dashboard/review'}> <FaAd></FaAd> Add a review</NavLink></li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;