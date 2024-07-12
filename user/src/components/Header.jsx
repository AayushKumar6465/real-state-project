import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import logo from "../assets/pic/logo2.png"

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <header className="bg-pink-800 shadow-md hover:shadow-2xl">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
          <img src={logo} alt="logo" className="w-auto h-16 rounded-lg shadow-pink-800 mr-4 transition duration-300" />
          <div className="ms-2 mt-4">
            <span className="text-slate-50">All</span>
            <span className="text-slate-400">Seasons</span>
            <span className="text-slate-50">Properties</span>
           </div>
          </h1>
        </Link>
        <form
          onSubmit={handleSubmit}
          className="bg-slate-50 p-3 rounded-lg flex items-center"
        >
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent focus:outline-none w-24 sm:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className="text-white" />
          </button>
        </form>
        <ul className="flex gap-8">
          <Link to="/">
            <li className="hidden sm:inline text-slate-50 hover:underline hover:text-slate-600">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-50 hover:underline hover:text-slate-600">
              About
            </li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                className="rounded-full h-7 w-7 object-cover"
                src={currentUser.avatar}
                alt="Profile"
              />
            ) : (
              <li className="hidden sm:inline text-gray-950 hover:underline border-white rounded-full bg-slate-200 p-2">
                Sign in
              </li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
