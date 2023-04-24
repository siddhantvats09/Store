import React from 'react'
import { Cartstate } from '../context/Context'
import Singleproduct from './Singleproduct'

const Home = () => {

 const {
  state:{products},
}= Cartstate()
 console.log(products)
  return (
    <div className="home">
      <div className='productContainer'>
      {products.map((prod)=>{
        return <Singleproduct prod={prod} key={prod.id}/>
      })}
    </div>
    </div>
  )
}

export default Home
