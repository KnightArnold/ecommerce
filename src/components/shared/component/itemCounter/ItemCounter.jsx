import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import { CartContext } from "../../../../context/CartContext";
import PropTypes from 'prop-types';

const ItemCounter = ({id, quantity}) => {
    const [counter, setCounter] = useState(quantity ?? 1);
    const { addItem, modifyItem } = useContext(CartContext);
    const isViewCart = window.location.pathname.includes('cart');

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
                console.log('entro modifyItem');
                modifyItem(id, counter - 1);
            } 
       } 
    }

  return (
    <div>
        {
            isViewCart ? (
                <Stack direction="horizontal" gap={3} className="col-md-10 mx-auto border pe-4 ps-1" >
                    <div className="p-0">
                        <Button variant="light" className="btn-sm" onClick={handleRemoveCounter} ><strong>-</strong></Button>                    
                    </div>        
                    <div className="">{counter}</div>
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
                <Stack>
                    <div className="p-0">
                        <Button onClick={() => addItem(id, counter)} variant="info">Añadir al carrito</Button>
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