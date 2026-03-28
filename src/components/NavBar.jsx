import * as LucideIcons from "lucide-react";

const NavBar = () => {
  return (
    <div className="bg-white border-b-4 border-black border-double px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-black font-mono text-3xl font-bold flex items-center gap-2 cursor-pointer">
          <LucideIcons.CircleParking size={36} />
          Pomo<span className="text-black">Focus</span>
        </h1>

        {/* Icons */}
        <ul className="flex gap-4">
          <li className="p-3 border-4 border-black border-double rounded-full hover:bg-black hover:text-white transition cursor-pointer">
            <LucideIcons.Timer size={24} />
          </li>

          <li className="p-3 border-4 border-black border-double rounded-full hover:bg-black hover:text-white transition cursor-pointer">
            <LucideIcons.ListTodo size={24} />
          </li>

          <li className="p-3 border-4 border-black border-double rounded-full hover:bg-black hover:text-white transition cursor-pointer">
            <LucideIcons.BarChart size={24} />
          </li>
        </ul>

      </div>
    </div>
  );
};

export default NavBar;