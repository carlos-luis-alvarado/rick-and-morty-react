import PropTypes from 'prop-types'
export const ButtonDesactivate = ({ numberPage, handleClick }) => {
  return <>
    <button
      className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase  border-2 border-cyan-400 transition-all hover:bg-green-400 text-white  active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      onClick={handleClick}
    >
      <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        {numberPage}
      </span>
    </button>
  </>
}
ButtonDesactivate.propTypes = {
  numberPage: PropTypes.number,
  handleClick: PropTypes.func,
}