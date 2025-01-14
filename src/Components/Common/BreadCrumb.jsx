import { Link } from "react-router-dom";

const BreadCrumb = ({ bread, link }) => {
  return (
    <div className="text-sm breadcrumbs flex justify-center  text-[#242424]">
      <ul>
        <li className="text-gray-700">
          <Link to="/">Home</Link>
        </li>
        <li className="text-[#242424] font-medium">
          <Link to={link}>{bread}</Link>
        </li>
      </ul>
    </div>
  );
};

export default BreadCrumb;
