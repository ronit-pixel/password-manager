import React from "react";

const Navbar = () => {
  return (
    <>
    <div className="h-20">
      <nav className=" flex justify-around items-center pt-3 ">
        <h1 className="uppercase font-bold"><img src="public\logo.png" alt="" width={60} /></h1>

        <nav className="flex gap-10  max-w-screen-sm ">
          <h1><a href="/" className="uppercase font-medium hover:font-extrabold">Home</a></h1>
          <h1><a href="#" className="uppercase font-medium hover:font-extrabold">About</a></h1>
          <h1><a href="#" className="uppercase font-medium hover:font-extrabold">Contact </a></h1>
        </nav>
      </nav>
      </div>
    </>
  );
};

export default Navbar;
