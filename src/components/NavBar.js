import { Link } from "react-router-dom"

function NavBar() {
  return (
      <nav>
          <Link 
              to='/'
          >
              Cody Kilpatrick
          </Link>

            
          <Link
              to='/about'
              >
              About
          </Link>

          <Link
              to='/contact'
          >
              Contact
          </Link>

          <Link
              to='/projects'
          >
              Projects
          </Link>

          <Link
              to='/resume'
          >
              Resume
          </Link>
      </nav>
  )
}

export default NavBar