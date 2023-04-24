import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Cartstate } from '../context/Context'

const Singleproduct = ({ prod }) => {

    const {
        state:{cart},
        dispatch
    }=Cartstate()
console.log(cart)
    return (
        <div className='products'>
            <Card>
                <Card.Img varient='top' src={prod.image} alt={prod.name} />
                <Card.Body>
                    <Card.Title>{prod.name}</Card.Title>
                    <Card.Subtitle style={{ paddingBottom: 10 }}>
                       <span>{prod.price}</span>
                    {prod.fastDelivery ?(
                        <div>Fast Delivery</div>
                        ):(
                    <div>4 days delivery</div>
                    )}
                </Card.Subtitle>
                {cart.some((p)=>p.id===prod.id)?
                (<Button variant='danger'
                onClick={()=>{dispatch({
                    type:'REMOVE_FROM_CART',
                    payload:prod
                })}}>
                        Remove from cart
                </Button>):( <Button 
                onClick={()=>{dispatch({
                    type:'ADD_TO_CART',
                    payload:prod
                })}}>
                        Add to cart
                </Button>)
                }
                
               
            </Card.Body>
        </Card>
    </div >
  )
}

export default Singleproduct
