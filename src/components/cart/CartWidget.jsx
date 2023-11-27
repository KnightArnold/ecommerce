import { useContext } from "react"
import { CartContext } from "../../context/CartContext";
import Badge from 'react-bootstrap/Badge';

const CartWidget = () => {
  const {itemsInCart} = useContext(CartContext);
  return (
    <div className="d-flex">
        <p>🛒</p>
        <p><Badge pill bg="secondary">{itemsInCart}</Badge></p>
    </div>
  )
}

export default CartWidget;