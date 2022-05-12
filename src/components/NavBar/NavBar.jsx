import { Link, NavLink } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light border rounded border-dark border-2 bg-gradient opacity-75">
          <ul>
            <li>Welcome, {user.name}</li>
            <li><Link to="/profiles">Profiles</Link></li>
            <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
            <li><Link to="/changePassword">Change Password</Link></li>
          </ul>
        </nav>
        :
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light border rounded border-dark border-2 bg-gradient opacity-75">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src="" alt="" width="30" height="24" className="d-inline-block align-text-top" />PokeTypes!</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
              <li className="nav-item">
                  <Link to="/">All Types</Link>
                </li>
                <li className="nav-item">
                  <Link to="/login">Log In</Link>
                </li>
                {/* wont need a signup as I will be the only user account */}
                {/* <li className="nav-item">
                  <Link to="/signup">Sign Up</Link>
                </li> */}
                <li className="nav-item">
                  <Link to="/add">Add PokeType (eventually Admin only)</Link>
                </li>
                <br />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <h5>Hide navbar</h5>
            </button>
              </ul>
            </div>
          </div>
        </nav>
      }
    </>
  )
}

export default NavBar
