import useFetchProducts from "../hooks/useFetchProducts";
import ProductCard from "./ProductCard";

const ProductsList = () => {
  const {
    data: products, //cambio el nombre por facilidad no es obligatorio cambiarlo
    loading,
    error,
  } = useFetchProducts("https://fakestoreapi.com/products");

  if (loading) {
    return <div>Cargando productos...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="bg-gray-200 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ProductsList;

//crear un componente que se llame ProductCard.jsx
//este componente recibe cada producto y lo muestra en una tarjeta.
