import { Home, History, Wallet, Settings } from "lucide-react";
import Image from "next/image";

const menuList = [
  {
    id: 1,
    name: "Home",
    path: "/dashboard",
    icon: Home,
  },
  {
    id: 2,
    name: "History",
    path: "/dashboard/history",
    icon: History,
  },
  {
    id: 3,
    name: "Billing",
    path: "/dashboard/billing",
    icon: Wallet,
  },
  {
    id: 4,
    name: "Settings",
    path: "/dashboard/settings",
    icon: Settings,
  },
];

const SideNav = () => {
  return (
    <div className="h-screen p-5 shadow-sm border">
      <div className="flex items-center justify-center">
        <Image src="/logo.svg" alt="Logo" width={150} height={150} />
      </div>
      <hr className="my-6 border-gray-200" />
      <div className="mt-3">
        {menuList.map((menu) => (
          <div
            key={menu.id}
            className="flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center"
          >
            <menu.icon className="w-6 h-6" />
            <span className="text-base">{menu.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
