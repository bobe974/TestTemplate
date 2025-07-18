import { Link } from "react-router-dom";
import logo from "../assets/logoAJ.png";

const Header = () => {
  return (
    <nav className="bg-gray-900 fixed top-0 left-0 right-0 h-16 z-50 flex items-center px-4">
      <div className=" max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-8 w-auto" />
            </Link>

            <Link
              to="/manage"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Gestion des articles
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
