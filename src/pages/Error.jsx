import { Link } from 'react-router-dom'
import './index.css'

export const Error = () => {
  return <div className='container mx-auto py-8'>
    <div className="h-[85vh]  m-auto flex justify-center text-center items-center text-white flex-wrap gap-5 text-9xl bg-[url('./assets/img/error.png')] bg-contain bg-no-repeat bg-center">
      <h2 className='text-green-400 text-shadow font-bold w-[15%] text-9xl'>4</h2>
      <h2 className="text-green-400 text-shadow font-bold  w-[15%] ">0</h2>
      <h2 className='text-green-400 text-shadow font-bold  w-[15%] text-9xl'>4</h2>
    </div>
    <div className='text-center'>
      <Link className='text-white bg-pink-500 p-2 rounded-sm' to={'/'} >Go to home</Link>
    </div>
  </div>

}