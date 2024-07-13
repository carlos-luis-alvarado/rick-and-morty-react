import { NavLink } from 'react-router-dom'
import imgLogo from '../assets/img/logo.webp'
import { RxHamburgerMenu } from "react-icons/rx";
import './components.css'
export const Header = () => {

  const handleClick = () => {
    const nav = document.querySelector('.nav-class');
    nav.classList.toggle('hidden')
  }
  return <>
    <header className='px-8 relative z-10 w-[100%] bg-black bg-opacity-50'>
      <div className='flex justify-between items-center'>
        <NavLink to={'./home'}>
          <figure className='w-2/5'>
            <img className='' src={imgLogo}></img>
          </figure>
        </NavLink>
        <button onClick={handleClick} className='md:hidden text-white bg-cyan-400 p-2 rounded-sm '>
          <RxHamburgerMenu />
        </button>
        <nav className='bg-gray-900 z-10 p-4 nav-class absolute right-0 left-0 top-0 hidden md:block md:relative md:right-0 md:top-0 md:bg-inherit'>
          <ul className='text-white text-lg flex flex-col md:flex-row gap-4'>
            <button onClick={handleClick} className='md:hidden w-10 self-end text-white bg-red-400 p-1 rounded-sm '>
              x
            </button>
            <li><NavLink onClick={handleClick} className='text-cyan-300 uppercase' to={'./home'}>Home</NavLink></li>
            <li><NavLink onClick={handleClick} className='text-cyan-300 uppercase' to={'./characters/1'}>Characters</NavLink></li>
            <li><NavLink onClick={handleClick} className='text-cyan-300 uppercase' to={'./locations/1'}>Locations</NavLink></li>
            <li><NavLink onClick={handleClick} className='text-cyan-300 uppercase' to={'./episodes/1'}>Capitulres</NavLink></li>
          </ul>
        </nav>
      </div >
    </header >
  </>
}