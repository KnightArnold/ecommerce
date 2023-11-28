import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import { CartContext } from "../../../../context/CartContext";
import Spinner from 'react-bootstrap/Spinner';
import PropTypes from 'prop-types';

const ItemCounter = ({id, quantity}) => {
    const [counter, setCounter] = useState(quantity ?? 1);
    const { addItem, modifyItem, itemsInCart } = useContext(CartContext);
    const isViewCart = window.location.pathname.includes('cart');
    const [loading, setLoading] = useState(true); 

    const handleAddCounter = () => {
        setCounter((prev) => prev + 1);
        if (isViewCart) {
            modifyItem(id, counter + 1);
        }
    }

    const handleRemoveCounter = () => {
       if (counter > 1) {
            setCounter((prev) => prev - 1);
            if (isViewCart) {                
                modifyItem(id, counter - 1);
            } 
       } 
    }

    const handleAddItem = () => {
        setLoading(false);                
        addItem(id, counter);        
        setTimeout(
            () => setLoading(true), 
            500
        );
    }

  return (
    <div>
        {
            isViewCart ? (
                <Stack direction="horizontal" gap={1} className="col-md-12 mx-auto border" >
                    <div className="p-0">
                        <Button variant="light" className="btn-sm" onClick={handleRemoveCounter} ><strong>-</strong></Button>                    
                    </div>        
                    <div className="p-0">{counter}</div>
                    <div className="p-0">
                        <Button variant="light" className="btn-sm" onClick={handleAddCounter} ><strong>+</strong></Button>                                                
                    </div>					                    
                </Stack>
            ) :
            <>
                <Stack direction="horizontal" gap={4} className="mx-auto" >        
                    <div className="pb-2">Cantidad: </div>
                    <div className="pb-2">
                        <Button variant="light" onClick={handleRemoveCounter} ><strong>-</strong></Button>
                    </div>
                    <div className="pb-2">
                        {counter === 1 ? `${counter} unidad` : `${counter} unidades`}
                    </div>
                    <div className="pb-2">
                        <Button variant="light" onClick={handleAddCounter} ><strong>+</strong></Button>                                                
                    </div>                    
                </Stack>
                <Stack direction="horizontal" gap={2} className="mx-auto">
                    <div className="p-2">
                        <Button onClick={handleAddItem} variant="info">
                        {!loading && (<Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="false"
                        />)} 
                            Añadir al carrito
                        </Button>
                    </div>
                    <div className="p-2">
                    <NavLink
                        to="/cart"
                        className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        {itemsInCart > 0 && <Button variant="primary">Ver Carrito</Button>}
                    </NavLink> 
                    </div>                    
                </Stack>                                                                                         
            </>
        }
    </div>                  
  )
}

export default ItemCounter

ItemCounter.propTypes = {
    id: PropTypes.any,
    quantity: PropTypes.any
  };