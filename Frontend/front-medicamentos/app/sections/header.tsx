import Link from "next/link";
const Header = () => {
  return (
<header className="flex bg-p-olivine-600 text-p-olivine-50 p-6 border-b border-p-olivine-700">
  <div className="flex">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="size-10">
      <g stroke="white" strokeWidth="4">
        <path d="M 40,10 L 40,90 L 60,90 L 60,10 Z" fill="none" />
        <path d="M 10,40 L 90,40 L 90,60 L 10,60 Z" fill="none" />
      </g>
      <g stroke="white" strokeWidth="4">
        <path d="M 10,40 L 15,40" />
        <path d="M 85,40 L 90,40" />
        <path d="M 10,60 L 15,60" />
        <path d="M 85,60 L 90,60" />
        <path d="M 40,10 L 40,15" />
        <path d="M 60,10 L 60,15" />
        <path d="M 40,85 L 40,90" />
        <path d="M 60,85 L 60,90" />
      </g>
    </svg>
    
    <div className=" pl-2 text-2xl font-bold transition-transform duration-300 ease-in-out hover:scale-110 hover:text-p-harvest-gold-200">
      <a href="#">MedFinder</a>
    </div>

  </div>

  <div className="max-w-7xl mx-auto flex items-center">

    <nav className="ml-auto">
      {/* <ul className="flex space-x-6">
        <li><a href="#" className="hover:text-gray-300">Inicio</a></li>
        <li><a href="#" className="hover:text-gray-300">Servicios</a></li>
        <li><a href="#" className="hover:text-gray-300">Contacto</a></li>
      </ul> */}
    </nav>
  </div>
</header>

  );
};
export default Header;
