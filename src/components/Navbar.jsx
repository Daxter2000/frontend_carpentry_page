import { useState } from 'react'
import { close, logo, menu } from '../assets'
import logo2 from '../assets2/logoTransparent.png'
import { navLinks } from '../constants'

function Navbar() {

  const [toggle, setToggle] = useState(false)
  return (
    <nav className='w-full flex px-10 justify-between items-center navbar fixed top-0 left-0 right-0 bg-transparent/80 z-[100]'>
      <img src={logo2} alt="hoobank" className='w-[100px] h-[100px]' />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-bold cursor-pointer text-[20px] text-yellow-900 ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}

      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className='w-[28px] h=[28px] object-contain'
          onClick={() => { setToggle((prev) => !prev) }}

        />

        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end flex-col items-center flex-1">
            {navLinks.map((nav, index) => (
              <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}`}
              >
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}

          </ul>

        </div>
      </div>
    </nav>
  )
}

export default Navbar