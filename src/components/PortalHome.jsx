import { Link } from "react-router-dom"
import imgPortal from '../assets/img/portal.png'
import PropTypes from 'prop-types'
export const PortalHome = ({ title }) => {
  return <>
    <div className="w-[12rem] mt-24 md:mt-0 relative">
      <Link to={`../${title}/1`}>
        <figure className=''>
          <img className='drop-shadow-css' src={imgPortal} ></img>
        </figure>
        <p className='font-bold uppercase tracking-widest font-mono text-shadow text-white drop-shadow-2xl  text-4xl absolute top-[45%]  text-center'>{title}</p>
      </Link>
    </div>
  </>
}

PortalHome.propTypes = {
  title: PropTypes.string,
}