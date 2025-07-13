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
import Dashboard from "./pages/Dashboard";
import AboutUs from "./pages/home/AboutUs";
import ContactUs from "./pages/home/ContactUs";

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
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/about" element={<AboutUs/>} />
      <Route path="/contact" element={<ContactUs/>} />



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
