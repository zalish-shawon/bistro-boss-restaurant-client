import { useEffect, useState } from "react";
import SectionTitle from "../../../Section/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../../hooks/useMenu";

const PopularMenu = () => {
const [menu] = useMenu();
const popular = menu.filter(item => item.category === "popular");
    return (
        <section className="mb-12">
            <SectionTitle
                heading={'from our menu'}       
                subHeading={'Check it out'}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem> )
                }
            </div>
            <div className="flex justify-center">
            <button className="btn btn-outline border-0 border-b-4 mt-4">View all menu</button>
            </div>
        </section>
    )
  
};

export default PopularMenu;