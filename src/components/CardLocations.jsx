import { useEffect, useState } from "react"
import { IoPlanet } from "react-icons/io5";
import { ModalCharacter } from "./ModalCharacter";
import PropTypes from 'prop-types'

export const CardLocation = ({ location }) => {
  const [showModal, setShowModal] = useState(false);
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    if (characters.length !== 0) {
      setShowModal(true)
    }
  }, [characters])


  const handleClick = async () => {
    try {
      if (characters.length === 0) {
        const residentPromises = location.residents.map(url => fetch(url).then(response => response.json()));
        const data = await Promise.all(residentPromises);
        setCharacters(data)
      } else {
        setShowModal(true)
      }

    } catch (error) {
      console.error("Error fetching residents:", error);
    }
  }


  return <div className="hover:shadow-2xl w-60 hover:shadow-blue-400 bg-slate-800 rounded-md overflow-hidden p-4">
    <div className="flex items-center justify-center gap-2 ">
      <IoPlanet className="text-2xl text-amber-500" />
      <div>
        <p className=" text-white font-bold  text-lg">{location.name} </p>
        <span className=" text-cyan-300 text-sm">{location.type} - </span>
        <span className=" text-green-300 text-sm">{location.dimension} </span>
      </div>
    </div>
    <div className="text-center my-2">
      {
        (location.residents.length !== 0) ? <button
          className="relative bg-pink-400 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={handleClick}
        > Show habitants</button> : <p className="text-slate-300">No data</p>
      }
      {
        showModal && <ModalCharacter characters={characters} setShowModal={setShowModal} />
      }
    </div>
  </div>
}

CardLocation.propTypes = {
  location: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    dimension: PropTypes.string.isRequired,
    residents: PropTypes.array,
  }),
}