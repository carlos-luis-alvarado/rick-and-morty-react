
import './index.css'
import { PortalHome } from '../components/PortalHome';

const arrayPortals = ['characters', 'locations', 'episodes'];
export const Index = () => {
  return <>
    <div className="z-0 absolute top-0 bottom-0 left-0 right-0 bg-[url('./assets/img/bg-home-2.jpg')]  md:bg-cover bg-center bg-no-repeat h-[100vh]">
      <div className="flex flex-col items-center justify-around md:flex-row h-[100vh]">
        {arrayPortals.map((portalTitle, index) => (<PortalHome key={index} title={portalTitle} />))}
      </div>
    </div>
  </>
}