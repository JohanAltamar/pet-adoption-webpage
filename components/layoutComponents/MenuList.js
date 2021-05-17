import Link from "next/link";

const MenuList = ({ ...rest }) => {
  return (
    <div className="flex flex-col w-full">
      <ul className="w-full mt-16 mb-16" {...rest}>
        <Link href="/adopta">
          <li className="border-b-2 p-4 cursor-pointer hover:bg-opacity-75 hover:bg-primary transition-all duration-300">
            <a>Adopta un peludito</a>
          </li>
        </Link>
        <Link href="/aliados">
          <li className="border-b-2 p-4 cursor-pointer hover:bg-opacity-75 hover:bg-primary transition-all duration-300">
            <a>Aliados</a>
          </li>
        </Link>
        <Link href="/#nosotros">
          <li className="border-b-2 p-4 cursor-pointer hover:bg-opacity-75 hover:bg-primary transition-all duration-300">
            <a>Nosotros</a>
          </li>
        </Link>
        <Link href="/#contacto">
          <li className="border-b-2 p-4 cursor-pointer hover:bg-opacity-75 hover:bg-primary transition-all duration-300">
            <a>Contacto</a>
          </li>
        </Link>
        <Link href="/login">
          <li className="border-b-2 p-4 cursor-pointer hover:bg-opacity-75 hover:bg-primary transition-all duration-300">
            <a>Login</a>
          </li>
        </Link>
      </ul>
      <span className="text-center text-lg font-bold">Adopta, no compres!</span>
    </div>
  );
};

export default MenuList;
