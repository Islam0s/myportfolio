import React from 'react' 
const Navbar = () => {
  return (
    <div>
      <ul className="flex px-5 py-10 bg-black justify-center space-x-30 text-lg text-white">
        <li>Home</li>
        <li>Blog</li>
        <li>Projects</li>
        <li>Contact Me</li>
      </ul>  
    </div>
  )
}

export default Navbar
