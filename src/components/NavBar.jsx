import * as LucideIcons from "lucide-react";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center bg-black p-4">
      <h1 className="text-white font-mono text-3xl cursor-pointer font-bold flex items-center">
        <LucideIcons.CircleParking size={40} />
        Pomo<span className="text-green-600">Focus</span>
      </h1>
      <ul className="flex gap-6 text-white  ">
        <li className="hover:bg-green-600 rounded-full p-3 ">
          <LucideIcons.Timer size={28} />
        </li>
        <li className="hover:bg-green-600 rounded-full p-3 ">
          <LucideIcons.ListTodo size={28} />
        </li>
        <li className="hover:bg-green-600 rounded-full p-3 ">
          <LucideIcons.BarChart size={28} />
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
