import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useProducts } from "../context/ProductContext";

const AddProductForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [data, setData] = useState("");

  const handleFormSubmit = (data) => {
    const productData = {
      nom: data.nom,
      qte: parseInt(data.qte),
      prix: parseFloat(data.prix),
      categorie: data.categorie,
      image: data.image || defaultImageUrl,
      dateDePublication: new Date().toISOString().slice(0, 10),
      description: data.description,
    };

    setData(JSON.stringify(productData, null, 2));

    if (onSubmit) {
      onSubmit(productData.prix);
    }

    console.log("Données du produit:", productData.nom);
    console.log(productData)
    //envoie au context
    addProduct(productData);
  };

  //contexte methode depuis app
  const { addProduct } = useProducts();

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Ajouter un produit
      </h2>

      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nom du produit *
          </label>
          <input
            {...register("nom", { required: "Le nom du produit est requis" })}
            placeholder="Ex: Chaussures de sport"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.nom && (
            <p className="text-red-500 text-sm mt-1">{errors.nom.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Quantité *
          </label>
          <input
            {...register("qte", {
              required: "La quantité est requise",
              min: {
                value: 1,
                message: "La quantité doit être supérieure à 0",
              },
            })}
            type="number"
            placeholder="Ex: 8"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.qte && (
            <p className="text-red-500 text-sm mt-1">{errors.qte.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Prix (€) *
          </label>
          <input
            {...register("prix", {
              required: "Le prix est requis",
              min: { value: 0, message: "Le prix doit être positif" },
            })}
            type="number"
            step="0.01"
            placeholder="Ex: 119.99"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.prix && (
            <p className="text-red-500 text-sm mt-1">{errors.prix.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Catégorie *
          </label>
          <select
            {...register("categorie", { required: "La catégorie est requise" })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Sélectionnez une catégorie...</option>
            <option value="Vêtements">Vêtements</option>
            <option value="Chaussures">Chaussures</option>
            <option value="Accessoires">Accessoires</option>
            <option value="Électronique">Électronique</option>
            <option value="Livres">Livres</option>
            <option value="Sport">Sport</option>
            <option value="Maison">Maison</option>
          </select>
          {errors.categorie && (
            <p className="text-red-500 text-sm mt-1">
              {errors.categorie.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            URL de l'image *
          </label>
          <input
            {...register("image", { required: "L'URL de l'image est requise" })}
            type="url"
            placeholder="https://images.unsplash.com/photo-..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.image && (
            <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            {...register("description")}
            placeholder="Décrivez votre produit..."
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
        >
          Ajouter le produit
        </button>
      </form>

      {/* {data && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2 text-gray-800">
            Données du formulaire :
          </h3>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm">
            {data}
          </pre>
        </div>
      )} */}
    </div>
  );
};

export default AddProductForm;
