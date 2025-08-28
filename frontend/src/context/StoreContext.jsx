import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";

export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        try {
            setLoading(true);
            // Initialize any required data here
            setLoading(false);
        } catch (error) {
            console.error("Context Error:", error);
            setLoading(false);
        }
    }, []);

    const addToCart = (itemId)=>{
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }
    const removeFromCart= (itemId) =>{
        setCartItems((prev) => {
            const currentQty = prev[itemId] || 0;
            if (currentQty <= 1) {
                const { [itemId]: _, ...rest } = prev;
                return rest;
            }
            return { ...prev, [itemId]: currentQty - 1 };
        });
    }
    useEffect(()=>{
        console.log(cartItems);
    },[cartItems])

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        loading
    }
    
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
}