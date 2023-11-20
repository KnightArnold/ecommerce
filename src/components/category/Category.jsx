import { useParams } from "react-router-dom";

const Category = () => {
    const { idCategory } = useParams();

    return <div>Usted esta buscando: {idCategory}</div>;  
}

export default Category