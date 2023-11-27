import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import { CartContext } from "../../../../context/CartContext";
import PropTypes from 'prop-types';

const ItemCounter = ({id}) => {
    const [counter, setCounter] = useState(1);
    const { addItem } = useContext(CartContext);

    const handleAddCounter = () => setCounter((prev) => prev + 1);
    const handleRemoveCounter = () => counter > 1 && setCounter((prev) => prev - 1);

  return (
            <>
                <Stack direction="horizontal" gap={3} className="col-md-10 mx-auto" >        
                    <Button variant="light" onClick={handleRemoveCounter} ><strong>-</strong></Button>
                    <p>{counter === 1 ? `${counter} unidad` : `${counter} unidades`} </p>
                    <Button variant="light" onClick={handleAddCounter} ><strong>+</strong></Button>                                                
                </Stack>
                <Stack>
                    <Button onClick={() => addItem(id, counter)} variant="info">Añadir al carrito</Button>
                </Stack>
            </>
            
      
  )
}

export default ItemCounter

ItemCounter.propTypes = {
    id: PropTypes.any
  };