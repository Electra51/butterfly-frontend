import { BiCategoryAlt, BiPurchaseTagAlt } from "react-icons/bi";
import { FaRegBookmark, FaRegUserCircle } from "react-icons/fa";
import { IoArrowBackSharp, IoSettingsOutline } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import {
  MdListAlt,
  MdLocationOn,
  MdOutlineAddchart,
  MdOutlineCategory,
  MdOutlineEmail,
  MdPhone,
} from "react-icons/md";
import { PiUserListBold } from "react-icons/pi";
import { RiFileEditLine, RiProductHuntLine } from "react-icons/ri";
import { TbShoppingCartCopy } from "react-icons/tb";
import exImage1 from "../../assets/company/1.png";
import exImage2 from "../../assets/company/2.png";
import exImage3 from "../../assets/company/3.png";
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
    link: "/dashboard/product-category",
    label: "Product Category",
    icon: <BiCategoryAlt />,
    role: 1,
  },
  {
    link: "/dashboard/add-product",
    label: "Add Product",
    icon: <MdOutlineAddchart />,
    role: 1,
  },
  {
    link: "/dashboard/products",
    label: "All Product",
    icon: <TbShoppingCartCopy />,
    role: 1,
  },
  {
    link: "/dashboard/orders",
    label: "Order's",
    icon: <BiPurchaseTagAlt />,
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

export const pricingplanData = [
  {
    id: 1,
    package_name: "Comfort Relax",
    price: "$29.99",
    heading_text: "Improve your look with our professional hairstyling.",
    services: [
      {
        id: 1,
        name: "Hair Cutting",
      },
      {
        id: 2,
        name: "Clinical massage",
      },
      {
        id: 3,
        name: "Updo and Stylings",
      },
      {
        id: 4,
        name: "Highlightings",
      },
      {
        id: 5,
        name: "Chemical Peels",
      },
      {
        id: 6,
        name: "Spa Manicure",
      },
      {
        id: 6,
        name: "Facials",
      },
    ],
    button_color: "#ec4899",
  },
  {
    id: 2,
    package_name: "Premium Spa",
    price: "$39.99",
    heading_text: "Our manicures and pedicures are expertly.",
    services: [
      {
        id: 1,
        name: "MicroDreambrasion",
      },
      {
        id: 2,
        name: "Hair Cutting",
      },
      {
        id: 3,
        name: "Clinical massage",
      },
      {
        id: 4,
        name: "Updo and Stylings",
      },
      {
        id: 5,
        name: "AromaTherapy",
      },
      {
        id: 6,
        name: "Classic Massage",
      },
      {
        id: 7,
        name: "Chemical Peels",
      },
    ],
    button_color: "#6d28d9",
  },
  {
    id: 3,
    package_name: "Luxury Retreat",
    price: "$49.99",
    heading_text: "Our manicures and pedicures are expertly carried out ",
    services: [
      {
        id: 1,
        name: "Hot Stones",
      },
      {
        id: 2,
        name: "Hand massage",
      },
      {
        id: 3,
        name: "Padicure Spa",
      },
      {
        id: 4,
        name: "Aroma Therapy",
      },
      {
        id: 5,
        name: "Chemical Peels",
      },
      {
        id: 6,
        name: "Spa Manicure",
      },
      {
        id: 7,
        name: "Waxing",
      },
    ],
    button_color: "#ca8a04",
  },
  {
    id: 4,
    package_name: "Ultimate Glow",
    price: "$59.99",
    heading_text: "Achieve a stunning look with our premium pakage",
    services: [
      {
        id: 1,
        name: "Facial Treatments",
      },
      {
        id: 2,
        name: "Body Scrub",
      },
      {
        id: 3,
        name: "Anti-Aging",
      },
      {
        id: 4,
        name: "Tisue Massage",
      },
      {
        id: 5,
        name: "Luxury Facial",
      },
      {
        id: 6,
        name: "FullBody Wrap",
      },
      {
        id: 7,
        name: "Eye Care",
      },
    ],
    button_color: "#0d9488",
  },
];
export const extraFeatureData = [
  {
    title: "Aromatherapy",
    image: exImage1,
    description:
      "Experience the soothing power of essential oils to relax your mind and body. Our sessions are designed to reduce stress.",
  },
  {
    title: "Relax",
    image: exImage2,
    description:
      "Escape the hustle & bustle of daily life. Let's create a calming atmosphere where you can enjoy a moment of pure tranquility.",
  },
  {
    title: "Massage",
    image: exImage3,
    description:
      "Relieve tension & restore your body's natural balance with our professional massage services.",
  },
];
