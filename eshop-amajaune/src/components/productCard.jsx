import { Link } from 'react-router-dom';
import Modal from './modal';
import { useState } from 'react';
import ProductDetail from './ProductDetail';

const ProductCard = ({product}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className='flex justify-center'>
  <button onClick={()=> setIsModalOpen(true)} className="group relative block">
    <img src={product.image} className="aspect-square rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
    <div className="m-4 flex justify-between">
      <div>
        <h3 className="text-sm text-gray-700">
          {product.nom}
        </h3>
        <p className="mt-1 text-sm text-gray-500">{product.categorie}</p>
      </div>
    </div>
  </button>
  <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title = {product.nom} children={<ProductDetail product={product}/>}></Modal>
</div>
  )
}

export default ProductCard