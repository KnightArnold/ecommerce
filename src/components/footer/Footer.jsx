import "./footer.css";
import logoFooter from "../../img/newFooter.png";
import logoLinkedin from "../../img/linkedin.svg";
import Stack from 'react-bootstrap/Stack';

export const Footer = () => {
  return (
    <footer className="nav-footer">
      <Stack direction="horizontal" gap={4} className="mx-auto" >
            <img src={logoFooter} alt={"logoFooter"} style={{ height: '3rem' }} className="me-2" />
            <p className="mt-3">{(new Date().getFullYear())} Copyright &copy;</p>
            <p className="mt-3">Arnaldo Antonio Torres</p>
            <a href="https://www.linkedin.com/in/arnaldo-antonio-torres-33999641" target="_blank" rel="noreferrer">
              <img src={logoLinkedin} alt={"logoLinkedin"} style={{ height: '1.2rem' }} />
            </a> 
      </Stack>
    </footer>    
  );
};