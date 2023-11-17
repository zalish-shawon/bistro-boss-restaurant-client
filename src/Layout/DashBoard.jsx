import { FaAd, FaBook, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart, FaUser, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const DashBoard = () => {
    const [isAdmin] = useAdmin();

    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
                    {
                        isAdmin ?
                            <>
                                <li className=""><NavLink to={'/dashboard/adminHome'}> <FaHome></FaHome> Admin home</NavLink></li>
                                <li className=""><NavLink to={'/dashboard/addItems'}><FaUtensils></FaUtensils>Add items</NavLink></li>
                                <li className=""><NavLink to={'/dashboard/manageItems'}> <FaList></FaList> Manage Items</NavLink></li>
                                <li className=""><NavLink to={'/dashboard/bookings'}> <FaBook></FaBook> Manage Bookings</NavLink></li>
                                <li className=""><NavLink to={'/dashboard/allUsers'}> <FaUser></FaUser> All Users</NavLink></li>
                            </>
                            :
                            <>
                                <li className=""><NavLink to={'/dashboard/userHome'}> <FaHome></FaHome> User home</NavLink></li>
                                <li className=""><NavLink to={'/dashboard/cart'}> <FaShoppingCart></FaShoppingCart> My cart</NavLink></li>
                                <li className=""><NavLink to={'/dashboard/reservation'}> <FaCalendar></FaCalendar> Reservation</NavLink></li>
                                <li className=""><NavLink to={'/dashboard/review'}> <FaAd></FaAd> Add a review</NavLink></li>
                            </>
                    }
                    <div className="divider"></div>
                    <li className=""><NavLink to={'/'}> <FaHome></FaHome> Home</NavLink></li>
                    <li className=""><NavLink to={'/order/salad'}> <FaSearch></FaSearch>Menu</NavLink></li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-4">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;