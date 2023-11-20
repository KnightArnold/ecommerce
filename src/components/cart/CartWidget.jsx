import { useContext } from "react"
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const {items} = useContext(CartContext);
  return (
    <div className="d-flex">
        <p>🛒</p>
        <p>{items}</p>
    </div>
  )
}

export default CartWidget;