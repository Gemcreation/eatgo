
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div>
      <div className='flex justify-between items-center h-16 bg-blue-500 mx-auto px-6 text-white'>
        <h1>EATGO</h1>
        <ul className='hidden md:flex'>
          <li className='p-4'>Home</li>
          <li className='p-4'>About</li>
          <li className='p-4'>Contact</li>
          <li className='p-4'>Blog</li>
        </ul>   
        
        {/* icon */}
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? 
        <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      </div>
      {/* for mobile icons */}
      </div>
      {/* <div className={nav ? "fixed left-0 top-0 border-r h-full bg-[#bd2] w-[50%]" : "fixed hidden"}>
      </div> note: hidden works same as = left-[-100%]
      */}
      <div className={!nav ? "fixed left-0 top-0 border-r h-full bg-[#bd2] w-[50%]" : "fixed top-0 -translate-x-full transition-all duration-600 ease-in-out "}>
        {/* <h1 className="m-4">EATGO</h1> */}
        <ul className="uppercase mt-2">
          <li className="p-4 border-b border-gray-500">Home</li>
          <li className="p-4 border-b border-gray-500">About</li>
          <li className="p-4 border-b border-gray-500">Contact</li>
          <li className="p-4">Blog</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
