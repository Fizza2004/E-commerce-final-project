import { useState, createContext, useEffect } from "react";
export const CardContext = createContext();

export const CardProvider = ({children}) => {
  const [totalCount,setTotalCount] = useState(0);
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    try{
      const parsedCart = JSON.parse(storedCart);
      return Array.isArray(parsedCart) ? parsedCart : [];    
    }
    catch(error)
    {
      return [];
    }
  });

  useEffect(() => {
    const count = cart.reduce((sum,item)=>sum+=item.quantity,0);
    setTotalCount(count);
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  //when i click add to cart by cart in localstorage should be updated
  //product is an object with img, id ,description etc.
  const addToCart = (product) => {
    alert('Added to Cart')
    setCart((prevCart) =>{
      const existingItem = prevCart.find((item)=> item.id === product.id);
      if(existingItem) {
        return prevCart.map((item) => 
          item.id === product.id 
            ? {...item, quantity: item.quantity + 1} : item
        )
      }
      return [...prevCart, {...product, quantity: 1}]
    });
    // setTotalCount(prevCount => prevCount+1);
  }

  
  const increaseCardQuantity = (id) => {
    console.log('artir')
    setCart(prevCart => {
      return prevCart.map((item)=>item.id === id ? {...item, quantity: item.quantity+1}: item)
    })
  }

  const decreaseCardQuantity = (id) => {
    console.log('azalt');
    setCart(prevCart => {
      return prevCart.map((item) => {
        if(item.id === id){
          if(item.quantity > 1){
            return {...item, quantity: item.quantity-1}
          } else if(item.quantity === 1){
            return null
          }
        }
        return item;
      })
      .filter(item=>item!==null)
      // return prevCart.map((item)=>item.id === id ? {...item, quantity: item.quantity-1}: item)
    })
  }

  return(
    <CardContext.Provider value={{totalCount,setTotalCount, addToCart,cart,decreaseCardQuantity,increaseCardQuantity}}>
      {children}
    </CardContext.Provider>
  )
}