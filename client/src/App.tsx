import { useState } from "react";
import "./App.css";
import CartDisplay from "./components/CartDisplay";
import CartTop from "./components/CartTop";
import products from "./utils/data";
import Navbar from "./components/Navbar";

function App() {
  const [modal, setModal] = useState(false);
  const [displayedProducts, setDisplayedProducts] = useState<any>(products);
  const [cart, setCart] = useState([]);

  const handleSort = (sortBy: string) => {
    let sortedProducts;
    if (sortBy === "priceLowToHigh") {
      sortedProducts = [...displayedProducts].sort((a, b) => a.price - b.price);
      setDisplayedProducts(sortedProducts);
    } else if (sortBy === "priceHighToLow") {
      sortedProducts = [...displayedProducts].sort((a, b) => b.price - a.price);
      setDisplayedProducts(sortedProducts);
    }
  };

  const handleSearch = (query: string) => {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setDisplayedProducts(filteredProducts);
  };

  const addToCart = (productId: string, quantity: number) => {
    const product = products.find((p) => p.id === productId);
    if (product) {
      const existingProduct = cart.find((item) => item.id === productId);
      if (existingProduct) {
        setCart(
          cart.map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity + quantity }
              : item
          )
        );
      } else {
        setCart([...cart, { ...product, quantity }]);
      }
    }
    alert("Item added successfully");
  };

  const deleteFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="p-2">
      <Navbar />
      <CartTop
        setModal={setModal}
        handleSort={handleSort}
        handleSearch={handleSearch}
        onDeleteFromCart={deleteFromCart}
      />
      <CartDisplay
        products={displayedProducts}
        onAddToCart={addToCart}
        cart={cart}
      />

      {modal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Cart Summary</h3>
            <p>Total Items: {cart.length}</p>
            <p>Total Price: ${calculateTotalPrice().toFixed(2)}</p>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
              onClick={() => setModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
