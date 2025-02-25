import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <Nav className="flex-column p-3">
      <Nav.Item>
        <Link to="/" className="nav-link">Getting started</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/customize" className="nav-link">Customize</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/layout" className="nav-link">Layout</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/content" className="nav-link">Content</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/forms" className="nav-link">Forms</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/components" className="nav-link">Components</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/helpers" className="nav-link">Helpers</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/utilities" className="nav-link">Utilities</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/extend" className="nav-link">Extend</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/about" className="nav-link">About</Link>
      </Nav.Item>
      
      <hr />
      
      <Nav.Item>
        <Link to="/migration" className="nav-link">Migration</Link>
      </Nav.Item>
    </Nav>
  )
}

export default Sidebar 