import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/HomePage/Home";
import About from "../Pages/AboutPage/About";
import Contact from "../Pages/ContactPage/Contact";
import Login from "../Pages/AuthenticationPage/Login";
import Register from "../Pages/AuthenticationPage/Register";
import Services from "../Pages/ServicesPage/Services";
import DashboardLayout from "../Layouts/DashboardLayout";
import DashboardService from "../Pages/DashboardPage/DashboardService";
import Dashboard from "../Pages/DashboardPage/Dashboard";

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
        path: "/about",
        element: <About />,
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
        path: "/dashboard/dashboard",
        element: <DashboardService />,
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
