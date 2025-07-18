const ProductDetail = ({ product }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-lg shadow-md">
      <div className="flex-shrink-0 w-full md:w-1/2">
        <img
          src={product.image}
          alt={product.nom}
          className="w-full h-auto rounded-md object-cover"
        />
      </div>

      <div className="flex flex-col justify-between w-full md:w-1/2">
        <div>
          
          <p className="text-gray-600 mb-4">{product.description}</p>
        </div>
        <div>
          <span className="text-xl font-semibold text-yellow-500">
            {product.prix} €
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
