import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../../assets/logo.svg";
import Sidebar from "./Sidebar";

interface NavLinkProps {
  id: number;
  label: string;
  href: string;
}

interface NavbarProps {
  children?: React.ReactNode;
}

const Navbar = ({ children }: NavbarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showOverlay, setShowOverlay] = useState(false);

  const navLinks: NavLinkProps[] = [
    { id: 1, label: "home", href: "/" },
    { id: 2, label: "support", href: "/support" },
    { id: 3, label: "my account", href: "/account" },
  ];

  return (
    <>
      <header className="w-full bg-white flex items-center justify-between px-6 py-6 md:px-14 z-20 relative">
        <div>
          <img src={Logo} alt="logo" className="h-8 md:h-10" />
        </div>

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-8 text-gray-700 text-sm">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => navigate(link.href)}
                className={`cursor-pointer ${
                  location.pathname === link.href ? "font-semibold text-indigo-600" : ""
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* toggle sidebar mobile */}
          <button
            className="p-2 rounded-lg hover:bg-gray-100 transition cursor-pointer flex md:hidden"
            onClick={() => { 
              setIsSidebarOpen(prev => !prev);
              setShowOverlay(true);
            }}
          >
            {isSidebarOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* toggle sidebar desktop */}
          <button
            className="p-2 rounded-lg hover:bg-gray-100 transition cursor-pointer hidden md:flex"
            onClick={() => setIsSidebarOpen(prev => !prev)}
          >
            {isSidebarOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* overlay */}
      {showOverlay && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div className="flex flex-1 relative">
        <div className={`
          fixed top-30 left-1 md:top-40 md:left-8 h-full z-50 transform transition-transform duration-300
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <Sidebar />
      </div>
      
      {/* main content */}
        <main
          className={`
            flex-1 transition-all duration-300
            ${isSidebarOpen ? "md:translate-x-0" : "md:translate-x-0"}
          `}
        >
          {children}
        </main>
      </div>
    </>
  );
};

export default Navbar;