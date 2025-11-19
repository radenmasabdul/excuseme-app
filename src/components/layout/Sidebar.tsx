import { useLocation, useNavigate } from "react-router-dom";
import HomeIcon from "../../assets/Home.svg";
import BagIcon from "../../assets/Bag.svg";
import ChartActivityIcon from "../../assets/Chart-pie.svg";
import ChartReports from "../../assets/Chart-pie-alt.svg";
import BoxIcon from "../../assets/Box.svg";

const navItems = [
  { icon: HomeIcon, label: "Home", href: "/" },
  { icon: BagIcon, label: "Projects", href: "/projects" },
  { icon: ChartActivityIcon, label: "Activity", href: "/activity" },
  { icon: ChartReports, label: "Reports", href: "/reports" },
  { icon: BoxIcon, label: "Archive", href: "/archive" },
];

interface SidebarLinkProps {
  icon: string;
  isActive: boolean;
  onClick: () => void;
  label: string;
}

const SidebarLink = ({ icon, isActive, onClick, label }: SidebarLinkProps) => {
  const buttonClasses = `flex items-center justify-center transition-all duration-200 cursor-pointer text-white/90
    ${isActive
      ? "text-[#1768B3] bg-[#88C6FF66] shadow-lg rounded-full w-12 h-12 my-2"
      : "h-12 w-12 my-2 hover:text-white/100 hover:bg-white/10 rounded-xl"
    }`;

  const imgClasses = `w-6 h-6 ${isActive ? "w-7 h-7" : "w-7 h-7"} transition-all duration-200`;

  return (
    <button onClick={onClick} title={label} className={buttonClasses}>
      <img src={icon} alt={label} className={imgClasses} />
    </button>
  );
};

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="flex max-h-screen">
      <nav className="flex flex-col items-center bg-[#1768B3] w-16 py-2 px-8 rounded-full">
        {navItems.map(item => (
          <SidebarLink
            key={item.href}
            icon={item.icon}
            label={item.label}
            isActive={item.href === location.pathname}
            onClick={() => navigate(item.href)}
          />
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;