import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/HomePage/Home";
import About from "../Pages/AboutPage/About";
import Contact from "../Pages/ContactPage/Contact";
import Login from "../Pages/AuthenticationPage/Login";
import Register from "../Pages/AuthenticationPage/Register";
import Services from "../Pages/ServicesPage/Services";
import DashboardLayout from "../Layouts/DashboardLayout";
import Dashboard from "../Pages/DashboardPage/Dashboard";
import Category from "../Pages/DashboardPage/CategoryPage/Category";
import AddService from "../Pages/DashboardPage/ServicePage/AddService";
import DashboardService from "../Pages/DashboardPage/ServicePage/DashboardService";
import BookingPerService from "../Pages/ServicesPage/BookingPerService";
import Profile from "../Pages/DashboardPage/ProfilePage/Profile";
import Reservation from "../Pages/DashboardPage/ReservationPage/Reservation";
import Setting from "../Pages/DashboardPage/SettingPage/Setting";
import ProductCategory from "../Pages/DashboardPage/ProductCategoryPage/ProductCategory";
import AddProduct from "../Pages/DashboardPage/AddProductPage/AddProduct";
import DashboardProductPage from "../Pages/DashboardPage/ProductPage/DashboardProductPage";
import CartPage from "../Pages/CartPage/CartPage";
import Checkout from "../Pages/CheckoutPage/Checkout";
import Order from "../Pages/OrderPage/Order";
import EachServiceDetail from "../Pages/ServicesPage/EachServiceDetail";
import ShopPage from "../Pages/ShopPage/ShopPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/services/:id",
        element: <EachServiceDetail />,
      },
      {
        path: "/bookings/:id",
        element: <BookingPerService />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/category-list",
        element: <Category />,
      },
      {
        path: "/dashboard/orders",
        element: <Order />,
      },
      {
        path: "/dashboard/service-add",
        element: <AddService />,
      },
      {
        path: "/dashboard/all-service",
        element: <DashboardService />,
      },
      {
        path: "/dashboard/product-category",
        element: <ProductCategory />,
      },
      {
        path: "/dashboard/add-product",
        element: <AddProduct />,
      },
      {
        path: "/dashboard/products",
        element: <DashboardProductPage />,
      },
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
      {
        path: "/dashboard/reservations",
        element: <Reservation />,
      },
      {
        path: "/dashboard/settings",
        element: <Setting />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
