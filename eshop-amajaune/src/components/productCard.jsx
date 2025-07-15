import React from 'react'

const ProductCard = ({product}) => {
  return (
    <React.Fragment>
        <div classNameName="group relative">
        <img src={product.image} className="aspect-square  rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
        <div className="mt- flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" class="absolute inset-0"></span>
                {product.nom}
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{product.categorie}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ProductCard