import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./home.css";

const Home = () => {

  const {items, setItems} = useContext(CartContext);

  return (
    <div>
      <h3>{items}</h3>
      <button
        className="mr-6"
        onClick={() => {
          setItems((prev) => prev - 1);
        }}
      >
        -
      </button>

      <button        
        onClick={() => {
          setItems((prev) => prev + 1);
        }}
      >
        +
      </button>

    </div>
  );
}

export default Home