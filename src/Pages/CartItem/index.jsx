import { useContext } from "react"
import { CardContext } from "../../components/CardContext"
export default function CartItem({price,title,quantity,imgUrl,id}){
  const {increaseCardQuantity, decreaseCardQuantity} = useContext(CardContext)
  return (<div className="flex items-center justify-between py-4 border-b">
              <div className="flex items-center gap-4">
                <img
                  src={imgUrl}
                  alt="Product Image"
                  className="w-20 h-20 rounded-md"
                />
                <div> 
                  <h3 className="font-medium">{title}</h3>
                </div>
              </div>
            
              <div className="flex items-center gap-4">
                <button className="bg-gray-200 text-gray-600 px-2 py-1 rounded" onClick={()=>decreaseCardQuantity(id)}>-</button>
                <span>{quantity}</span>
                <button className="bg-gray-200 text-gray-600 px-2 py-1 rounded" onClick={()=>increaseCardQuantity(id)}>+</button>
              </div>
              
              <div>
                <p>{quantity} x {price}</p>
              </div>
          </div>)
}