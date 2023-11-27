import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import OrderForm from "../order/OrderForm";
import LoadSpinner from "../shared/component/loadSpinner/LoadSpinner";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

const Cart = () => {
  const { cart, cartItems, fetchCartItems, removeItem } = useContext(CartContext);
  
  console.log('cartItems: ',cartItems, 'cart: ', cart);

  useEffect(() => {
    if (cart.length > 0) {
      fetchCartItems()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>  
      {
        cartItems.length === 0 && cart.length > 0 ? (
          <LoadSpinner />
        ) :
        <>
          <Row>
            <Col md={8}>
              <CardGroup className="d-block">
                {cartItems?.map(item => (
                  <Card key={item.id} className="mt-3 border-0 shadow" >
                    <Row>
                      <Col xs={2}>
                        <Card.Img variant="top" src={item.url} alt={item.name} style={{ width: '64px', height: '64px' }} />
                      </Col>
                      <Col xs={10}>
                        <Card.Body>
                          <Card.Title>
                            <Stack direction="horizontal" gap={2}>
                              <div className="p-2">{item.name}</div>
                              <div className="p-2 ms-auto">$ {item.price}</div>
                            </Stack>                            
                          </Card.Title>
                          <Card.Text>
                          <Button variant="danger" onClick={() => removeItem(item.id)} >Eliminar</Button>
                          </Card.Text>                          
                        </Card.Body>                        
                      </Col>
                    </Row>                                                
                  </Card>
                ))}   
              </CardGroup>
            </Col>
            <Col md={{ span: 3, offset: 1 }}>{`md={{ span: 4, offset: 4 }}`}</Col>
          </Row>
          
                          
          <OrderForm /> 
        </>        
      }
            
         
          
      
    </div>    
  )
}

export default Cart