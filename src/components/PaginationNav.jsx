
import { ButtonDesactivate } from "./Buttons/ButtonDesactivate";
import { ButtonActivate } from "./Buttons/ButtonActive";
import { useNavigate } from "react-router-dom";
import { calculatePages } from "../helpers/helpers";
import PropTypes from 'prop-types'
export const PaginationNav = ({ page, setPage, section, lastPage }) => {
  const navigate = useNavigate();

  let items = calculatePages(page, lastPage)
  const handleClick = (e) => {
    const newPage = Number(e.target.children[0].textContent)
    setPage(newPage);
    navigate(`../${section}/${newPage}`)
  }

  const handleClickPrevius = () => {
    setPage(prevPage => prevPage - 1);
    navigate(`../${section}/${page - 1}`)
  }

  const handleClickNext = () => {
    setPage(prevPage => prevPage + 1);
    navigate(`../${section}/${page + 1}`)
  }
  return <>
    <div className="flex my-6 justify-center items-center gap-4 ">
      {
        (page !== 1) && <button
          onClick={handleClickPrevius}
          className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-cyan-400 uppercase align-middle transition-all rounded-full select-none border-2 border-cyan-50 hover:border-cyan-400 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
            aria-hidden="true" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
          </svg>
          Previous
        </button>
      }
      <div className="flex items-center gap-2">
        {
          items.map((value, index) => ((page == value) ?
            <ButtonActivate handleClick={handleClick} key={index} numberPage={value} /> :
            <ButtonDesactivate handleClick={handleClick} key={index} numberPage={value} />))
        }
      </div>
      {
        (page !== lastPage) && <button
          onClick={handleClickNext}
          className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-cyan-400 uppercase align-middle transition-all rounded-full select-none border-2 border-cyan-50 hover:border-cyan-400 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button">
          Next
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
            aria-hidden="true" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
          </svg>
        </button>
      }
    </div>
  </>
}

PaginationNav.propTypes = {
  page: PropTypes.number,
  lastPage: PropTypes.number,
  section: PropTypes.string,
  setPage: PropTypes.func
}
