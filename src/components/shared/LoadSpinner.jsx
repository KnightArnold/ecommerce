import Spinner from 'react-bootstrap/Spinner';
import './loadSpinner.css';

const LoadSpinner = () => {
  return (
    <div className="middle-screen">
        <Spinner  animation="border" role="status">
            <span className="visually-hidden">Cargando...</span>
        </Spinner>
    </div>    
  )
}

export default LoadSpinner