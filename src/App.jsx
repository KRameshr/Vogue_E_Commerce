import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import SubscribePopup from "./components/SubscribePopup";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import { CartProvider } from "./context/CartContext";
import JournalListing from "./pages/JournalListing";
import BlogDetail from "./pages/BlogDetail";
import Contact from "./pages/Contact";
import FAQs from "./pages/FAQs";
import Careers from "./pages/Careers";
import Register from "./pages/Register";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import OrderTracking from "./pages/OrderTracking";
import ComingSoon from "./pages/ComingSoon";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <SubscribePopup />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/login" element={<Login />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/order-tracking" element={<OrderTracking />} />
              <Route path="/ComingSoon" element={<ComingSoon />} />
              {/* Journal Routes MUST be above NotFound */}
              <Route path="/journal" element={<JournalListing />} />
              <Route path="/journal/:id" element={<BlogDetail />} />

              {/* Wildcard MUST be at the very bottom */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
