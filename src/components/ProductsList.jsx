import useFetchProducts from "../hooks/useFetchProducts";

const ProductsList = () => {
  const {
    data: products,
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
    <div>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <img src={product.image} alt="" />
            <p>{product.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsList;
