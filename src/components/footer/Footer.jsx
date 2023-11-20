import { Container, Row, Col } from 'react-bootstrap';

export const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3" >{(new Date().getFullYear())} Copyright &copy; Arnaldo Antonio Torres</Col>
        </Row>
      </Container>
    </footer>    
  );
};