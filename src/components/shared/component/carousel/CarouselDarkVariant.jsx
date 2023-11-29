import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import CurrencyFormatter from "../currencyFormatter/CurrencyFormatter";
import "./carouselDarkVariant.css";

const CarouselDarkVariant = ({items}) => {

  return (
    <Container>
        <Row className="mb-2">
            <Col className="p-0">
                <Carousel data-bs-theme="dark">
                {items.map((item) => (
                    <Carousel.Item key={item.id} >
                        <Card className="mt-3 border-0 shadow p-0" >
                            <Link className="nav-link" to={`/detail/${item.id}`}>
                                <Card.Header className="product-recommendations-categories-banner" >OFERTAS POR TIEMPO LIMITADO</Card.Header>
                            </Link>                            
                            <Row>
                            <Col xs={4}>
                                <Card.Img className="img-resize" variant="top" src={item.url} alt={item.brand} />
                            </Col>
                            <Col xs={8}>
                                <Card.Body className="p-2">
                                    <Card.Title>
                                        {item.name}                           
                                    </Card.Title>
                                    <Card.Subtitle>
                                        <h3>{CurrencyFormatter(item.price)}</h3>
                                    </Card.Subtitle>
                                    <Card.Text>
                                        {item.description}                    
                                    </Card.Text>
                                    <Link className="nav-link" to={`/detail/${item.id}`}>
                                        <Button variant="info">Ver Producto</Button>
                                    </Link>                                                                           
                                </Card.Body>                        
                            </Col>              
                            </Row>
                        </Card>
                    </Carousel.Item>
                ))}
                </Carousel>
            </Col>
        </Row>
    </Container>        
  )
}

export default CarouselDarkVariant

CarouselDarkVariant.propTypes = {    
    items: PropTypes.any
  };