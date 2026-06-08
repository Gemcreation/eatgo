
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div>
      <div className='flex justify-between items-center h-16 bg-blue-500 mx-auto px-6 text-white'>
        <h1>EATGO</h1>
        <ul className='flex'>
          <li className='p-4'>Home</li>
          <li className='p-4'>About</li>
          <li className='p-4'>Contact</li>
          <li className='p-4'>Blog</li>
        </ul>
      </div>
      <div>
        {/* icon */}
        <AiOutlineMenu />
      </div>
      <div className='fixed left-0 top-0 border-r h-full bg-[#bd2] w-[50%]'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
