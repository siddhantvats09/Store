import React from 'react'
import { Badge, Container, Dropdown, FormControl, Navbar ,Nav,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {FaShoppingCart} from 'react-icons/fa'
import {AiFillDelete} from 'react-icons/ai'
import { Cartstate } from '../context/Context'

const Header = () => {

  const {
    state:{cart},
    dispatch,
  }=Cartstate()
  return (
    <Navbar bg="dark" variant='dark' style={{height:80}}>
      <Container>
        <Navbar.Brand>
            <Link to='/'>
                shoping cart
            </Link>
        </Navbar.Brand>
        
        <Nav>
            <Dropdown className='carts'>
                <Dropdown.Toggle variant='success'>
                    <FaShoppingCart color="white" fontSize="25px"/>
                    <Badge>{cart.length}</Badge>
                </Dropdown.Toggle>
                <Dropdown.Menu style={{minWidth:370}}>
                {cart.length <= 0?(<span style={{Padding:10}}>Cart in empty!</span>):
                (
                  <>
                    {cart.map((prod)=>(
                      <span className='cartitem' key={prod.id}>
                        <img
                          src={prod.image}
                          className='cartItemImg'

                        />
                        <div className='cartitemDetail'>
                          <span>{prod.name}</span>
                          <span>{prod.price}</span>
                        </div>
                        <AiFillDelete
                          fontSize="20px"
                          style={{cursor:'pointer'}}
                          onClick={()=>dispatch({
                            type:"REMOVE_FROM_CART",
                            payload:prod
                          })}

                        />
                      </span>
                    ))}
                    <Link to="/cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link>
                  </>
                )}
                        
                </Dropdown.Menu>
            </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header
