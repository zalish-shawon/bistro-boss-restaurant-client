// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = () => {
    // const [menu, setMenu] = useState([]);
    // const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();


// useEffect(()=> {

//     fetch('http://localhost:5000/menus')
//     .then(res => res.json())
//     .then(data => {
//         setMenu(data);
//         setLoading(false);
//     })
// }
// ,[])

const {data: menu = [], isPending: loading, refetch} = useQuery({
    queryKey: ['menu'], 
    queryFn: async() =>{
        const res = await axiosPublic.get('/menus');
        return res.data;
    }
})


// return [menu]
return [menu, loading, refetch]

       
};

export default useMenu;