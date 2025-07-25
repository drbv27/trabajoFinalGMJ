import { useCartContext } from "../context/CartContext";

const Cart = () => {
  const { cartItems, clearCart } = useCartContext();
  console.log(cartItems);
  return (
    <div>
      {cartItems.map((cartItem) => {
        return (
          <p key={cartItem.id}>
            {cartItem.title} - {cartItem.quantity}
          </p>
        );
      })}
      <button
        className="bg-red-500 text-white font-bold ml-8 px-2 rounded hover:bg-red-300"
        onClick={() => clearCart()}
      >
        Vaciar Carrrito
      </button>
    </div>
  );
};

export default Cart;
