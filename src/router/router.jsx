import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Login from '../components/Login';
import Register from "../components/Register";
import AuthLayout from "../layout/AuthLayout";
import SingleTopSeller from "../pages/home/SingleTopSeller";
import SingleRecommendation from "../pages/home/SingleRecommendation";
import CartPage from "../pages/books/CartPage";
import CheckoutPage from "../pages/books/CheckoutPage";
import BookDiscoveryDashboard from "../components/BookDiscoveryDashboard ";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* Main routes with navbar */}
      <Route element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<SingleTopSeller />} />
        <Route path="/recommended-book/:id" element={<SingleRecommendation />} />
        <Route path="/dashboard" element={<h1>Dashboard</h1>} />
        <Route path="/orders" element={<h1>Orders</h1>} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/dash" element={<BookDiscoveryDashboard/>}/>
      </Route>

      {/* Auth routes without navbar */}
      <Route element={<AuthLayout/>}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Route>
  )
);

export default router;