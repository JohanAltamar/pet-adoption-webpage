import Link from "next/link";
import menuOptions from "./menuOptions";

const MenuList = ({ ...rest }) => {
  return (
    <div className="flex flex-col w-full">
      <ul className="w-full mt-16 mb-16" {...rest}>
        {menuOptions.map(({ label, link }) => (
          <Link key={link} href={link}>
            <li className="p-4 px-10 border-b font-bold tracking-wider cursor-pointer hover:bg-gray-200 hover:shadow-lg transition-all duration-300">
              <a>{label}</a>
            </li>
          </Link>
        ))}
      </ul>
      <span className="text-center text-lg font-bold">Adopta, no compres!</span>
    </div>
  );
};

export default MenuList;
