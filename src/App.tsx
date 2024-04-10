import { Outlet } from 'react-router-dom'
import { Navbar } from './components/NavBar/NavBar'

function App() {
  return (
    <div>
      <Navbar />
      <div className="section">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default App
