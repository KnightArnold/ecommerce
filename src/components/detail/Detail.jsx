import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import LoadSpinner from "../shared/component/loadSpinner/LoadSpinner";
import ItemCounter from "../shared/component/itemCounter/ItemCounter";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CurrencyFormatter from "../shared/component/currencyFormatter/CurrencyFormatter";
import { CartContext } from "../../context/CartContext";

const Detail = () => {
  const [item, setItem] = useState({});
  const { idProduct } = useParams();
  const [loading, setLoading] = useState(true);
  const {itemsInCart} = useContext(CartContext);

  console.log('detail itemsInCart:', itemsInCart);

  useEffect(() => {
    // Acceder a un documento
    const db = getFirestore();

    const itemRef = doc(db, 'items', idProduct)

    getDoc(itemRef)
    .then(res => {
      if (res.exists) {
        setItem({id: res.id, ...res.data()});
      }
    })
    .catch((err) => console.error(err))
    .finally(() => setLoading(false));
  }, [idProduct]);

  return (
    <div>
      {
        loading ? (
          <LoadSpinner />
        ) :                
          <>
          <Card className="mt-3 border-0 shadow" >
            <Row>
              <Col xs={4}>
                <Card.Img variant="top" src={item.url} alt={item.brand} />
              </Col>
              <Col xs={8}>
                <Card.Body>
                  <Card.Title>
                    {item.name}                           
                  </Card.Title>
                  <Card.Subtitle>
                    <h3>{CurrencyFormatter(item.price)}</h3>
                  </Card.Subtitle>
                  <Card.Text>
                    {item.description}                    
                  </Card.Text>
                  <ItemCounter id={item.id} />                                            
                </Card.Body>                        
              </Col>              
            </Row>
          </Card>                                    
          </>                                
      }                    
    </div>
  )
}

export default Detail