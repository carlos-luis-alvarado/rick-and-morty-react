import PropTypes from 'prop-types'
export const ButtonActivate = ({ numberPage, handleClick }) => {
  return <>
    <button
      className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full bg-green-400 text-center align-middle font-sans text-xs font-medium uppercase text-white shadow-md shadow-green-400 transition-all hover:shadow-lg hover:shadow-cyan-400 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none border-2  border-cyan-400"
      type="button"
      onClick={handleClick}
    >
      <span className="absolute font-extrabold transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        {numberPage}
      </span>
    </button>
  </>
}
ButtonActivate.propTypes = {
  numberPage: PropTypes.number,
  handleClick: PropTypes.func,
}