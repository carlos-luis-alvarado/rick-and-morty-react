import PropTypes from 'prop-types'
export const StatusCharacter = ({ status }) => {
  return <>
    <div className=" flex items-center gap-1 bg-slate-700 rounded-md absolute top-2 right-2 p-2">
      {
        (status == 'Alive') ?
          <>
            <span className="bg-green-600 rounded p-1"></span>
            <span className="text-green-400">{status}</span></>
          :
          (status == 'Dead') ?
            <>
              <span className="bg-red-600 rounded p-1"></span>
              <span className="text-red-400">{status}</span>
            </>
            : <>
              <span className="bg-gray-600 rounded p-1"></span>
              <span className="text-gray-400">{status}</span>
            </>
      }
    </div>
  </>
}

StatusCharacter.propTypes = {
  status: PropTypes.string,
}