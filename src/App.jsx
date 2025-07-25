import "./App.css";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import ProductsList from "./components/ProductsList";
import { useUserContext } from "./context/UserContext";

function App() {
  const { nombre } = useUserContext();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <div className="w-4/5">
          <ProductsList />
        </div>
        <div className="w-1/5">
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default App;
