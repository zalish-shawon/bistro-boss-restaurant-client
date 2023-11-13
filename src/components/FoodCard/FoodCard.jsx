import React from 'react';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useCart from '../../hooks/useCart';

const FoodCard = ({item}) => {
    const {name, image, price, recipe, _id } = item
    const location  = useLocation()
    const {user} = useAuth();
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
    const [, refetch] = useCart()

    const handleToCart = (food) => {
        console.log(food);
        if(user && user.email) {

            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }

            axiosSecure.post('/carts', cartItem)
            .then(res => {
                console.log(res.data);
                if(res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} added to your cart`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                      refetch();
                }
            })

        } else {
            Swal.fire({
                title: "You are not logged in",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login"
              }).then((result) => {
                if (result.isConfirmed) {
                navigate('/login', {state:{from:location}});
                }
              });
        }
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className='bg-green-900 text-white absolute right-0 mr-4 mt-4 px-4'>${price}</p>
                <div className="card-body flex flex-col items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button onClick={()=> handleToCart(item)} className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;