import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import SingleTopSeller from "./pages/home/SingleTopSeller";
import SingleRecommendation from "./pages/home/SingleRecommendation";
import CartPage from "./pages/books/CartPage";
import CheckoutPage from "./pages/books/CheckoutPage";
import BookDiscoveryDashboard from "./components/BookDiscoveryDashboard ";

function App() {
  return (
    <>
      <ToastContainer />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<SingleTopSeller />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/dash" element={<BookDiscoveryDashboard/>}/>



        <Route
          path="/recommended-book/:id"
          element={<SingleRecommendation />}
        />
      </Routes>
       


      <Footer />
    </>
  );
}

export default App;
