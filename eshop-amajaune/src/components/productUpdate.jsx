import { useForm } from "react-hook-form";
import { useProducts } from "../context/ProductContext";

function ProductUpdate({ product, onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: product,
  });

  const { updateProduct, deleteProduct } = useProducts();


  const onSubmit = (data) => {
    //updatee
    updateProduct(data);
    console.log("Produit mis à jour :", data);
     onClose()
  };

  const onDelete= (data) => {
    console.log("delete:", data.id);
    deleteProduct(data)
    onClose()
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 p-6 bg-white rounded shadow-md max-w-xl mx-auto"
    >
      <h2 className="text-xl font-semibold">Éditer le produit</h2>

      <input type="hidden" {...register("id")} />

      <div>
        <label>Nom</label>
        <input
          {...register("nom")}
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label>Quantité</label>
          <input
            type="number"
            {...register("qte")}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label>Prix</label>
          <input
            type="number"
            step="0.01"
            {...register("prix")}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
      </div>

      <div>
        <label>Catégorie</label>
        <input
          {...register("categorie")}
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <div>
        <label>Image</label>
        <input
          {...register("image")}
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <div>
        <label>Date de publication</label>
        <input
          type="date"
          {...register("dateDePublication")}
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <div>
        <label>Description</label>
        <textarea
          {...register("description")}
          rows={3}
          className="w-full border px-3 py-2 rounded"
        />
      </div>
      <div className="flex justify-center">
      <button
        type="submit"
        className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 mr-8"
      >
        Enregistrer
      </button>
      <button
      onClick={handleSubmit(onDelete)}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 p-2"
      >
        Supprimer
      </button>
      </div>
      
    </form>
  );
}

export default ProductUpdate;
