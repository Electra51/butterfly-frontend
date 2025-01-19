import { FaRegUserCircle } from "react-icons/fa";
import { GoTag } from "react-icons/go";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdListAlt, MdOutlineCategory } from "react-icons/md";
import { PiUserListBold } from "react-icons/pi";
import { RiFileEditLine } from "react-icons/ri";

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
    link: "/dashboard/post",
    label: "Blog Lists",
    icon: <MdListAlt />,
    role: 1,
  },
  {
    link: "/dashboard/author-list",
    label: "Author's Lists",
    icon: <PiUserListBold />,
    role: 2,
  },
  {
    link: "/dashboard/post",
    label: "Blog Lists",
    icon: <MdListAlt />,
    role: 2,
  },
  {
    link: "/dashboard/addPost",
    label: "Add New Blog",
    icon: <RiFileEditLine />,
    role: 1,
  },
  {
    link: "/dashboard/category",
    label: "Category",
    icon: <MdOutlineCategory />,
    role: 2,
  },
  {
    link: "/dashboard/tags",
    label: "Tags",
    icon: <GoTag />,
    role: 1,
  },
  {
    link: "/dashboard/tags",
    label: "Tags",
    icon: <GoTag />,
    role: 2,
  },
  {
    link: "/dashboard/profile",
    label: "Profile",
    icon: <FaRegUserCircle />,
  },
];
