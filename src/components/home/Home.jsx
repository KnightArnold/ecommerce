import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { getFirestore, getDocs, collection} from 'firebase/firestore';
import LoadSpinner from "../shared/component/loadSpinner/LoadSpinner";
import "./home.css";
import CurrencyFormatter from '../shared/component/currencyFormatter/CurrencyFormatter';

const Home = () => {
  const [items, setItems] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Acceder a una coleccion
    const db = getFirestore();

    const itemsRef = collection(db, 'items');

    getDocs(itemsRef)
      .then(res => {
        if (res.size === 0) {
          console.log('No results');
        }
        setItems(res.docs.map(doc => ({id: doc.id, ...doc.data()})));
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="card-container">
      {
        loading ? (
          <LoadSpinner />
        ) : 
        items.map((item) => (
          <Link className="nav-link" key={item.id} to={`/detail/${item.id}`}>
            <Card key={item.id} style={{ width: '18rem', height: '100%' }} className="p-1">
              <Card.Img variant="top" src={item.url} alt={item.name} />
              <Card.Body>
                <Card.Title>{CurrencyFormatter(item.price)}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{item.brand}</Card.Subtitle>
                <Card.Text className="text-limit">
                  {item.description}
                </Card.Text>              
              </Card.Body>
            </Card>
          </Link>         
          
        ))
      }                    
    </div>
  );
}

export default Home