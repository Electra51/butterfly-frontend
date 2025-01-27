import { FaRegBookmark, FaRegUserCircle } from "react-icons/fa";
import { IoArrowBackSharp, IoSettingsOutline } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import {
  MdListAlt,
  MdLocationOn,
  MdOutlineCategory,
  MdOutlineEmail,
  MdPhone,
} from "react-icons/md";
import { PiUserListBold } from "react-icons/pi";
import { RiFileEditLine } from "react-icons/ri";
import { TbShoppingCartCopy } from "react-icons/tb";

export const navData = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/services",
    title: "Services",
  },
  {
    path: "/shop",
    title: "Shop",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/contact",
    title: "Contact",
  },
];

export const sidebarData = [
  {
    link: "/dashboard/dashboard",
    label: "Dashboard",
    icon: <LuLayoutDashboard />,
  },
  {
    link: "/dashboard/author-list",
    label: "Author's Lists",
    icon: <PiUserListBold />,
    role: 2,
  },
  {
    link: "/dashboard/category-list",
    label: "Category",
    icon: <MdOutlineCategory />,
    role: 1,
  },
  {
    link: "/dashboard/all-service",
    label: "All Services",
    icon: <MdListAlt />,
    role: 1,
  },
  {
    link: "/dashboard/service-add",
    label: "Add Services",
    icon: <RiFileEditLine />,
    role: 1,
  },
  {
    link: "/dashboard/reservations",
    label: "Reservations",
    icon: <FaRegBookmark />,
    role: 1,
  },
  {
    link: "/dashboard/orders",
    label: "Order's",
    icon: <TbShoppingCartCopy />,
    role: 1,
  },
  {
    link: "/dashboard/profile",
    label: "Profile",
    icon: <FaRegUserCircle />,
  },

  {
    link: "/dashboard/settings",
    label: "Settings",
    icon: <IoSettingsOutline />,
  },
  {
    link: "/",
    label: "Back To Home",
    icon: <IoArrowBackSharp />,
  },
];

export const contactInfo = [
  {
    type: "email",
    title: "E-Mail Address",
    icon: MdOutlineEmail,
    value: "info@example.com",
  },
  {
    type: "phone",
    title: "Phone Number",
    icon: MdPhone,
    value: "+1 (555) 123-4567",
  },
  {
    type: "address",
    title: "Address",
    icon: MdLocationOn,
    value: "55 East Birchwood Ave. Brooklyn, New York 11201",
  },
];
