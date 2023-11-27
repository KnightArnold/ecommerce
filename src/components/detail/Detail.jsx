import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import LoadSpinner from "../shared/component/loadSpinner/LoadSpinner";
import ItemCounter from "../shared/component/itemCounter/ItemCounter";
import Row from 'react-bootstrap/Row';

const Detail = () => {
  const [item, setItem] = useState({});
  const { idProduct } = useParams();
  const [loading, setLoading] = useState(true);

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
            <Row className="justify-content-md-center">
              <Card key={item.id} style={{ width: '18rem', height: '100%' }}>
                <Card.Img variant="top" src={item.url} alt={item.name} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the...
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <ItemCounter id={item.id} />
                </Card.Footer>
              </Card>
            </Row>                        
          </>                                
      }                    
    </div>
  )
}

export default Detail