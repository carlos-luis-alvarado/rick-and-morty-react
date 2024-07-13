
import { IoPlanet } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { CgGenderMale } from "react-icons/cg";
import { FaHeartCircleBolt } from "react-icons/fa6";
import { FaDna } from "react-icons/fa";
import { BiSolidMoviePlay } from "react-icons/bi";
import { FaHeartCircleXmark } from "react-icons/fa6";
import { FaQuestion } from "react-icons/fa";
import { CgGenderFemale } from "react-icons/cg";
import PropTypes from 'prop-types'
export const Modal = ({ setShowModal, character }) => {
  return <>
    <div
      className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
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
          <h3 className="text-cyan-400 text-center text-2xl font-bold">{character.name} </h3>
          <div className="relative p-6 flex gap-4 items-center">
            <figure>
              <img src={character.image}></img>
            </figure>
            <div className="text-white">
              <div className="grid grid-cols-2 gap-2">

                <div className="text-center">
                  <IoPlanet className="text-4xl m-auto text-amber-500" />
                  <p className="text-lg">{character.origin.name}</p>
                  <span className="text-sm font-light text-cyan-300">Origin</span>
                </div>
                <div className="text-center">
                  <FaLocationDot className="text-4xl m-auto text-red-600" />
                  <p className="text-lg">{character.location.name}</p>
                  <span className="text-sm font-light text-cyan-300">Location</span>
                </div>
                <div className="text-center">
                  {
                    (character.gender === 'Male') ?
                      <CgGenderMale className="text-4xl m-auto text-blue-400" /> :
                      (character.gender === 'Female') ?
                        <CgGenderFemale className="text-4xl m-auto text-rose-300" /> :
                        <FaQuestion className="text-4xl m-auto text-gray-400" />

                  }
                  <p className="text-lg">{character.gender}</p>
                  <span className="text-sm font-light text-cyan-300">Gender</span>
                </div>
                <div className="text-center">
                  {
                    (character.status === 'Alive') ?
                      <FaHeartCircleBolt className="text-4xl m-auto text-green-400" /> :
                      (character.status === 'Dead') ?
                        <FaHeartCircleXmark className="text-4xl m-auto text-red-400" /> :
                        <FaQuestion className="text-4xl m-auto text-gray-400" />

                  }
                  <p className="text-lg">{character.status}</p>
                  <span className="text-sm font-light text-cyan-300">Status</span>
                </div>
                <div className="text-center">
                  <FaDna className="text-4xl m-auto text-violet-400" />
                  <p className="text-lg">{character.species}</p>
                  <span className="text-sm font-light text-cyan-300">Specie</span>
                </div>
                <div className="text-center">
                  <BiSolidMoviePlay className="text-4xl m-auto" />
                  <p className="text-lg">{character.episode.length}</p>
                  <span className="text-sm font-light text-cyan-300">Episodes</span>
                </div>
              </div>
            </div>
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

Modal.propTypes = {
  character: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    episode: PropTypes.array,
    origin: PropTypes.shape({
      name: PropTypes.string.isRequired
    }),
    location: PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  }),
  setShowModal: PropTypes.func
}