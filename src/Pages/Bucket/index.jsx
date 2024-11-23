import { useContext } from "react";
import { CardContext } from "../../components/CardContext";
import EmptyCard from "../EmptyCard";
import CartItem from "../CartItem";

export default function Bucket() {
  const {cart,totalCount} = useContext(CardContext);
  console.log(cart);
  const totalPrice = cart.reduce((sum,item)=> sum+item.quantity*item.price,0);
  console.log(totalPrice);

  return(<div className="max-w-screen-xl mx-auto pt-16">
            <div className="text-center pt-5 pb-4">
              <h5 className="text-5xl">Cart</h5>
              <hr className="pb-16 mt-3" />
            </div>

            {cart.length === 0 ? (
              <EmptyCard/>
            ):
            <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-100 min-h-screen mb-5">
              {/* <!-- Item List --> */}
              <div className="bg-white shadow-md rounded-lg w-full md:w-2/3 p-4">
                <h2 className="text-lg font-bold border-b pb-2">Item List</h2>
                  {cart.map((item)=>{
                      return(
                         <CartItem 
                          price = {item.price}
                          title = {item.title}
                          quantity = {item.quantity}
                          imgUrl = {item.image}
                          id = {item.id}
                        />
                      )
                    })}    
              </div>

              {/* <!-- Order Summary --> */}
              <div className="bg-white shadow-md rounded-lg w-full md:w-1/3 p-4">
                <h2 className="text-lg font-bold border-b pb-2">Order Summary</h2>
                <div className="py-4">
                  <div className="flex justify-between mb-2">
                    <p>Products ({totalCount})</p>
                    <p>${totalPrice.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between mb-2">
                    <p>Shipping</p>
                    <p>$30</p>
                  </div>
                  <div className="flex justify-between font-bold">
                    <p>Total amount</p>
                    <p>${(totalPrice+30).toFixed(2)}</p>
                  </div>
                </div>
                <button className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700">
                  Go to checkout
                </button>
              </div>
            </div> 
            }
            
        </div>)
}
