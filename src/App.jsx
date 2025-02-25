import { Navbar } from 'react-bootstrap'
import AppRoutes from './routes/index.jsx'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="sidebar bg-light border-end" style={{ width: '280px', minHeight: '100vh' }}>
        <Sidebar />
      </div>
      
      {/* Main content */}
      <div className="main flex-grow-1">
        <Navbar bg="white" className="border-bottom">
          <div className="container-fluid">
            <div className="d-flex align-items-center">
              <input 
                type="search" 
                className="form-control" 
                placeholder="Search docs..." 
                aria-label="Search documentation"
              />
              <span className="ms-2 text-muted">Ctrl /</span>
            </div>
          </div>
        </Navbar>
        
        <div className="container-fluid py-4">
          <AppRoutes />
        </div>
      </div>
    </div>
  )
}

export default App
