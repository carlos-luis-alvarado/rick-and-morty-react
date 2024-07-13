import { createBrowserRouter } from 'react-router-dom'
import { Characters, getCharactes } from '../pages/Characters.jsx'
import { Index } from '../pages/Index.jsx'
import { getLocations, Locations } from '../pages/Locations.jsx'
import { Episodes, getEpisodes } from '../pages/Episodes.jsx'
import App from '../App.jsx'
import { Error } from '../pages/Error.jsx'
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        index: true,
        element: <Index />
      },
      {
        path: "characters/:page",
        element: <Characters />,
        loader: getCharactes
      },
      {
        path: "locations/:page",
        element: <Locations />,
        loader: getLocations
      },
      {
        path: "episodes/:page",
        element: <Episodes />,
        loader: getEpisodes
      }
    ]
  },

])