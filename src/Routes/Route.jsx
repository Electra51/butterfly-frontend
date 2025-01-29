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
import NewPage from "../Pages/DashboardPage/ServicePage/NewPage";
import DashboardService from "../Pages/DashboardPage/ServicePage/DashboardService";
import BookingPerService from "../Pages/ServicesPage/BookingPerService";
import Profile from "../Pages/DashboardPage/ProfilePage/Profile";
import Reservation from "../Pages/DashboardPage/ReservationPage/Reservation";
import Setting from "../Pages/DashboardPage/SettingPage/Setting";

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
        path: "/bookings/:id",
        element: <BookingPerService />,
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
        path: "/dashboard/category-list",
        element: <Category />,
      },
      {
        path: "/dashboard/service-add",
        // element: <NewPage />,
        element: <AddService />,
      },
      {
        path: "/dashboard/all-service",
        element: <DashboardService />,
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
