import { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(true);
  return (
    <nav className="flex justify-between align-middle p-5 rounded-lg bg-gray-200">
      <h1 className="font-medium text-2xl">Navbar</h1>
      <ul className="gap-5 border hidden sm:flex">
        <li>Home</li>
        <li>About</li>
      </ul>
      <div className="relative p-0.5 sm:hidden  cursor-pointer w-10">
        <div
          className="flex flex-col gap-1 border-2"
          onClick={() => setShow((prevState) => !prevState)}
        >
          <span className="h-1 w-full rounded-md bg-gray-700"></span>
          <span className="h-1 w-full rounded-md bg-gray-700"></span>
          <span className="h-1 w-full rounded-md bg-gray-700"></span>
        </div>
        {show && (
          <div className="absolute p-9 w-72 right-5 top-8 rounded-lg bg-gray-500">
            <ul className="flex text-white font-medium flex-col text-center  gap-5   lg:hidden">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
