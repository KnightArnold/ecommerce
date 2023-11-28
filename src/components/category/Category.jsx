import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import LoadSpinner from "../shared/component/loadSpinner/LoadSpinner";
import CurrencyFormatter from "../shared/component/currencyFormatter/CurrencyFormatter";
import { toast } from "react-toastify";
import NotFound from "../notFound/NotFound";

const Category = () => {
    const [items, setItems] = useState([]);
    const { idCategory } = useParams();
    const [loading, setLoading] = useState(true);        

    useEffect(() => {
        // Aplicar un filtro
        const db = getFirestore();

        const queryFilter =  query(collection(db, 'items'), where('category', '==', idCategory));

        getDocs(queryFilter)
        .then(res => {            
            setItems(res.docs.map(doc => ({id: doc.id, ...doc.data()})));
        })
        .catch((error) => toast.error(`Fallo al cargar los items de la categoría: ${idCategory}. ${error.message}`, { autoClose: false }))
        .finally(() => setLoading(false));        
    }, [idCategory]);

    return (
        <div className="card-container">
          {
            loading ? (
              <LoadSpinner />
            ) :
            (items.length === 0 ?
              <Row style={{ display: 'contents' }}>
                <Col md={{ span: 6, offset: 3 }}>
                  <NotFound />  
                </Col>
              </Row>              
              :
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
            )
          }                    
        </div>
      ); 
}

export default Category