
import ProductCard from "../components/productCard";
import { Link } from "react-router-dom";
import { useProducts } from "../context/ProductContext";

function Home() {
 
  const { produits, setProduits } = useProducts();
  return (
    <div>
      <div className="text-right p-4">
        <Link to="/addproduct" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-auto">
          Ajouter
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {produits.map((p) => {
          console.log("img " + p.image);
          return <ProductCard product={p} key={p.id} />;
        })}
      </div>
    </div>
  );
}

export default Home;