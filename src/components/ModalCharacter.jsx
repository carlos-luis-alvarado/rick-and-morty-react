import { CardCaracter } from "./CardCharacter"
import PropTypes from 'prop-types'
export const ModalCharacter = ({ setShowModal, characters }) => {
  return <>
    <div
      className="container mx-auto  overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
    >
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-900 outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-start justify-between p-4 rounded-t">
            <button
              className="p-1 ml-auto bg-transparent border-0 text-red-400  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={() => setShowModal(false)}
            >
              <span className="bg-transparent  h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          {/*body*/}
          <div className="flex justify-center flex-wrap gap-5">
            {
              characters.map((character, index) => (<CardCaracter key={index} character={character} />))
            }
          </div>
          {/*footer*/}
          <div className="flex items-center justify-end p-6 rounded-b">
            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div >
    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </>
}

ModalCharacter.propTypes = {
  characters: PropTypes.array,
  setShowModal: PropTypes.func
}

