import { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import OrderForm from "../order/OrderForm";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import ListGroup from 'react-bootstrap/ListGroup';
import CardGroup from 'react-bootstrap/CardGroup';
import ItemCounter from "../shared/component/itemCounter/ItemCounter";
import LoadSpinner from "../shared/component/loadSpinner/LoadSpinner";
import CurrencyFormatter from "../shared/component/currencyFormatter/CurrencyFormatter";

const Cart = () => {
  const { cart, cartItems, fetchCartItems, removeItem, itemsInCart, totalPrice } = useContext(CartContext);

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
                  <Card key={item.id} className="mt-3 border-0 shadow p-2" >
                    <Row>
                      <Col xs={2}>
                        <Card.Img variant="top" src={item.url} alt={item.name} />
                      </Col>
                      <Col xs={10}>
                        <Card.Body>
                          <Card.Title>
                            <Stack direction="horizontal" gap={3}>
                              <div className="p-1">{item.name.toString().length > 35 ?  `${item.name.toString().substring(0,35)}...` : item.name.toString().substring(0,35) }</div>
                              <div className="p-1 ms-auto"><ItemCounter id={item.id} quantity={item.quantity} /></div>
                              <div className="p-1">{CurrencyFormatter(item.price)}</div>
                            </Stack>                            
                          </Card.Title>
                          <Card.Subtitle>
                            <Stack direction="horizontal" gap={2}>
                              <div className="p-2">{item.brand}</div>
                              <div className="p-2">
                                <Button variant="light" size="sm" onClick={() => removeItem(item.id)} >🗑 Eliminar</Button>
                              </div>  
                            </Stack>                            
                          </Card.Subtitle>                                                    
                        </Card.Body>                        
                      </Col>
                    </Row>                                                
                  </Card>
                ))}   
              </CardGroup>
            </Col>
            <Col md={4}>
                  <Card className="mt-3 border-0 shadow p-0">
                    <ListGroup>
                      <ListGroup.Item><strong>Orden de compra</strong></ListGroup.Item>
                      <ListGroup.Item>
                        <OrderForm /> 
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                  <Card className="mt-3 border-0 shadow p-0">
                    <ListGroup>
                      <ListGroup.Item><strong>Resumen de compra</strong></ListGroup.Item>
                      <ListGroup.Item>
                        <Stack direction="horizontal" gap={2}>
                          <div className="p-2">Productos ({itemsInCart})</div>
                          <div className="p-2 ms-auto">{CurrencyFormatter(totalPrice)}</div>
                        </Stack>
                        <Stack direction="horizontal" gap={2}>
                          <div className="p-2"><strong>Total</strong></div>
                          <div className="p-2 ms-auto"><strong>{CurrencyFormatter(totalPrice)}</strong></div>
                        </Stack>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>                  
            </Col>
          </Row>     
        </>        
      }
    </div>    
  )
}

export default Cart