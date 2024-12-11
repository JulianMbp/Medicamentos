import Link from "next/link";

const Header = () => {
  return (
    <header className="flex  bg-p-olivine-600 text-white p-6 border-b  border-p-olivine-800">
      <div className="flex   w-[80%]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="size-10 ml-6"
        >
          <g stroke="white" strokeWidth="4">
            <path d="M 40,10 L 40,90 L 60,90 L 60,10 Z" fill="none" />
            <path d="M 10,40 L 90,40 L 90,60 L 10,60 Z" fill="none" />
          </g>
          <g stroke="green" strokeWidth="6">
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

        <div className=" ml-7 items-start text-2xl font-bold transition-transform duration-300 ease-in-out hover:scale-110 hover:text-p-harvest-gold-200">
          <Link href="/">MEDFINDER</Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto  flex items-center justify-self-end  ">
        <ul className="flex space-x-6">
          <li>
            <Link
              href="IA"
              className="text-p-olivine-50  hover:underline hover:underline-offset-4  hover:"
            >
              FinderIA
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
