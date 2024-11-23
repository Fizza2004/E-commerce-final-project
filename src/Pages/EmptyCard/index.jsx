import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';


export default function EmptyCard() {
  return(
          <div className="bg-gray-300 h-56 flex items-center justify-center flex-col gap-y-6 mb-8">
            <p className="text-5xl">Your Cart is Empty</p>
            <button className="border border-black px-4 py-1.5 rounded flex items-center hover:bg-gray-100">
                <FontAwesomeIcon icon={faArrowLeft} className="mr-2 text-lg" />
                <Link to="/" className="hover:underline">Continue Shopping</Link>
            </button>
          </div>
        )
}