import { useState } from "react";
import { Home, Grid, MonitorSmartphone, Settings } from "lucide-react";

const navItems = [
  { name: "Dashboard", icon: Home, path: "/" },
  { name: "Rooms", icon: Grid, path: "/rooms" },
  { name: "Devices", icon: MonitorSmartphone, path: "/devices" },
  { name: "Settings", icon: Settings, path: "/settings" },
];

export default function NavBar({ active, setActive }) {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white shadow-md flex justify-around p-2
      md:top-0 md:bottom-auto md:h-screen md:w-20 md:flex-col md:justify-start">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <button
            key={item.name}
            onClick={() => setActive(item.path)}
            className={`flex flex-col items-center md:my-4 px-2 py-1 rounded-xl transition
              ${active === item.path ? "bg-blue-100 text-blue-600" : "text-gray-600 hover:bg-gray-100"}`}
          >
            <Icon size={24} />
            <span className="text-xs mt-1 hidden md:block">{item.name}</span>
          </button>
        );
      })}
    </nav>
  );
}
