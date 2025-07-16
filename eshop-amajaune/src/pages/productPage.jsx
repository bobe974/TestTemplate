// pages/ProductPage.jsx
import { useParams } from 'react-router-dom';

function ProductPage() {
  const { id } = useParams();
  
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Produit {id}</h1>
      <p>Détails du produit avec l'ID : {id}</p>
    </div>
  );
}

export default ProductPage;