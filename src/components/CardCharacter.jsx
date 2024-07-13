import { useState } from "react"
import { Modal } from "./Modal"
import { StatusCharacter } from "./StatusCharacter"
import PropTypes from 'prop-types'
export const CardCaracter = ({ character }) => {
  const [showModal, setShowModal] = useState(false)
  return <div className="transition-all duration-500  hover:shadow-2xl hover:shadow-green-400 bg-slate-800 rounded-md overflow-hidden relative group/item">
    <figure className="group-hover/item:opacity-80">
      <img className="shadow-inner shadow-red-400" src={character.image} />
    </figure>
    <div className=" absolute bg-gradient-to-t from-black left-0 right-0 top-0 bottom-0">
    </div>
    <p className="absolute text-green-400 top-3/4 left-4 text-lg">{character.name} - <span className="text-gray-400 text-base">{character.species}</span> </p>
    <StatusCharacter status={character.status} />
    <button
      className="opacity-0 group-hover/item:opacity-100  absolute top-[40%] right-[20%] border-2 border-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-500"
      type="button"
      onClick={() => setShowModal(true)}
    > Show details</button>
    {
      showModal && <Modal character={character} setShowModal={setShowModal} />
    }
  </div>
}

CardCaracter.propTypes = {
  character: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
  }),
}