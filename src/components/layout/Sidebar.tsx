import { useState } from "react";
import { Home, Briefcase, Clock, PieChart, Layers } from "lucide-react";

const navItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Briefcase, label: "Projects", href: "/projects" },
  { icon: Clock, label: "Activity", href: "/activity" },
  { icon: PieChart, label: "Reports", href: "/reports" },
  { icon: Layers, label: "Archive", href: "/archive" },
];

interface SidebarLinkProps {
  icon: React.ElementType;
  isActive: boolean;
  onClick: () => void;
  label: string;
}

const SidebarLink = ({ icon: Icon, isActive, onClick, label }: SidebarLinkProps) => {
  const buttonClasses = ` flex items-center justify-center transition-all duration-200 cursor-pointer text-white/90
    ${isActive
        ? "text-[#1768B3] bg-[#88C6FF66] shadow-lg rounded-full w-12 h-12 my-2" 
        : "h-12 w-12 my-2 hover:text-white/100 hover:bg-white/10 rounded-xl"
    }`;

  const iconClasses = ` stroke-2 transition-all duration-200 ${isActive ? "w-7 h-7" : "w-6 h-6"}`;

  return (
    <button onClick={onClick} title={label} className={buttonClasses}>
        <Icon className={iconClasses} />
    </button>
    );
};

const Sidebar = () => {
  const [activeHref, setActiveHref] = useState("/");

  return (
    <>
        <div className="flex max-h-screen">
            <nav className="flex flex-col items-center bg-[#1768B3] w-16 py-2 px-8 rounded-full">
                {navItems.map(item => (
                    <SidebarLink
                        key={item.href}
                        icon={item.icon}
                        label={item.label}
                        isActive={item.href === activeHref}
                        onClick={() => setActiveHref(item.href)}
                    />
                ))}
            </nav>
        </div>
    </>
  );
};

export default Sidebar;