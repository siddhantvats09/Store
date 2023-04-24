import React, { createContext ,useContext,useReducer} from 'react'

import { faker } from '@faker-js/faker';
import { Cartreducer } from './Reducers';





const Cart = createContext();
faker.seed(99)
const Context = ({ children }) => {
    

    const products = [...Array(20)].map(() => ({
        id:faker.datatype.uuid(),
        name:faker.commerce.productName(),
        price:faker.commerce.price(),
        image: `https://placekitten.com/800/300`,
        
        fastDelivery:faker.datatype.boolean(),
       


    }));
const [state, dispatch] = useReducer(Cartreducer,{
    products:products,
    cart:[]
})

    console.log(products)
    return (
        <Cart.Provider value={{state,dispatch}} >
            {children}
        </Cart.Provider>
    )
}
export const Cartstate=()=>{
    return useContext(Cart)
}

export default Context
