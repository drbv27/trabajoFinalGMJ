import { useCartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCartContext();

  return (
    <div className="bg-white rounded-2xl overflow-hidden flex flex-col items-center p-4">
      <img
        src={product.image}
        alt=""
        className="w-32 h-32 object-contain mb-4"
      />
      <h3 className="text-lg font-semibold text-center h-16 overflow-hidden mb-2">
        {product.title}
      </h3>
      <p className="text-gray-700 text-sm mb-2">{product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Añadir al carrito
      </button>
    </div>
  );
};

export default ProductCard;
