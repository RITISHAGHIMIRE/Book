import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Login from '../components/Login';
import Register from "../components/Register";
import AuthLayout from "../layout/AuthLayout"; // Import the layout

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* Main routes with navbar */}
      <Route element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<h1>Dashboard</h1>} />
        <Route path="/orders" element={<h1>Orders</h1>} />
        <Route path="/cart" element={<h1>Cart Page</h1>} />
        <Route path="/checkout" element={<h1>Check Out</h1>} />
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