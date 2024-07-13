import { Outlet } from "react-router-dom"
import { Header } from "./components/Header"
function App() {
  return (
    <>
      <div className="relative">
        <Header />
        <main>
          <div>
            <Outlet />
          </div>
        </main>
      </div>
    </>
  )
}

export default App
