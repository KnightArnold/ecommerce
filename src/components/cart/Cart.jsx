import { useRef } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { addDoc, collection, getFirestore } from "firebase/firestore";


const Cart = () => {
  const userNameRef = useRef(null);
  const userEmailRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const db = getFirestore();

    const collectionRef = collection(db, 'orders');

    const order = {
      userName: userNameRef.current.value,
      userEmail: userEmailRef.current.value,
      items: [],
      totalPrice: 0
    }

    addDoc(collectionRef, order)
    .then((res) => alert(`La orden ha sido enviada con éxito, su orden es: ${res.id}`));
  }

  return (
    <div>
      <Form onSubmit={handleSubmit} >
        <Row>
          <Col xs={7}>
            <Form.Group className="mb-3" controlId="userName">
              <Form.Label>Ingrese su Nombre Completo</Form.Label>
              <Form.Control ref={userNameRef} type="text" placeholder="Ingrese su Nombre Completo" required />        
            </Form.Group>

            <Form.Group className="mb-3" controlId="userEmail">
              <Form.Label>Ingrese su email</Form.Label>
              <Form.Control ref={userEmailRef} type="email" placeholder="Ingrese su email" required />
            </Form.Group> 
          </Col>
        </Row>
        
        
                   
        <Button variant="primary" type="submit">
          Enviar orden
        </Button>
      </Form>
    </div>    
  )
}

export default Cart