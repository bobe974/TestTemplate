import React from 'react'
import Header from './header'

const ProductCard = () => {
  return (
    <React.Fragment>
        <div class="group relative">
        <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg" class="aspect-square  rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
        <div class="mt- flex justify-between">
          <div>
            <h3 class="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" class="absolute inset-0"></span>
                Label
              </a>
            </h3>
            <p class="mt-1 text-sm text-gray-500">Categorie</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ProductCard