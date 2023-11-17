import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const Cart = () => {
    const [cart, refetch] = useCart()
    const axiosSecure = useAxiosSecure()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0).toFixed(2)

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${_id}`)
                .then(res => {
                    // console.log(res.data);
                    if(res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });

                          
                    }
                })

            }
          });
    }
    return (
        <div>
            <div className="flex justify-evenly mb-8">
                <h2 className="text-4xl">Items: {cart.length}</h2>
                <h2 className="text-4xl">Total price: {totalPrice}</h2>
                <button className="btn btn-primary">Pay</button>
            </div>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         #
        </th>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        cart.map((item, index) => <tr key={item._id}>
            <th>
              {index +1}
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image} />
                  </div>
                </div>
                
              </div>
            </td>
            <td>
             {item.name}
            </td>
            <td>${item.price}</td>
            <th>
              <button onClick={()=> handleDelete(item._id)}  className="btn btn-ghost btn-xs text-xl text-red-500"><FaTrashAlt></FaTrashAlt></button>
            </th>
          </tr> )
      }
      
 
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default Cart;