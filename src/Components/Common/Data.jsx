import { FaRegBookmark, FaRegUserCircle } from "react-icons/fa";
import { FaSection } from "react-icons/fa6";
import { GoTag } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdListAlt, MdOutlineCategory } from "react-icons/md";
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
    link: "/dashboard/services",
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
];
