import { Container, Row, Col } from 'react-bootstrap';
import "./footer.css";

export const Footer = () => {
  return (
    <footer className="nav-footer">
      <Container>
        <Row>
          <Col className="text-center py-3" >{(new Date().getFullYear())} Copyright &copy; Arnaldo Antonio Torres</Col>
        </Row>
      </Container>
    </footer>    
  );
};