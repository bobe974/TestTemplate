import { useProducts } from "../context/ProductContext";
import Modal from "../components/modal";
import { useState } from "react";
import ProductUpdate from "../components/productUpdate";
import { Link } from "react-router-dom";

function ManageProduct() {
  const { produits } = useProducts();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleClick = (id) => {
    const product = produits.find((p) => p.id === id);
    setSelectedProduct(product);
    setIsModalOpen(true);
  };
  return (
    <div className=" flex flex-col min-h-screen mt-4 ">
      <div className="flex justify-end mr-4  mb-4">
       <Link
        to="/addproduct"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Ajouter
      </Link>
      </div>
      <div className="min-w-full inline-block align-middle">
        <div className="overflow-hidden border border-gray-200 rounded-lg shadow-sm">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Id
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Label
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Qte
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Prix
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Catégorie
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Image
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {produits.map((p) => (
                <tr
                  key={p.id}
                  onClick={() => handleClick(p.id)}
                  className="hover:bg-gray-100 cursor-pointer transition-colors"
                >
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {p.id}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                    {p.nom}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                    {p.qte}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                    {p.prix}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                    {p.categorie}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                    {p.image}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-900 max-w-xs truncate">
                    {p.description}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                    {p.dateDePublication}
                  </td>
                </tr>
              ))}
            </tbody>
            {selectedProduct && (
              <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={selectedProduct.nom}
                children={
                  <ProductUpdate
                    product={selectedProduct}
                    onClose={() => setIsModalOpen(false)}
                  ></ProductUpdate>
                }
              ></Modal>
            )}
          </table>
        </div>
      </div>
    </div>
  );
}

export default ManageProduct;
