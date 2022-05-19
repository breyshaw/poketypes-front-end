import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import * as authService from './services/authService'
import * as typeService from './services/typeService'
import AddType from './pages/AddType/AddType'
import TypesList from './components/TypesList/TypesList'

const App = () => {
  //This is the function that houses the state of Types therefore it can update state.
  const [types, setTypes] = useState([])
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()

  const handleAddType = newTypeData => {
    typeService.create(newTypeData)
      .then(newTypeData =>
        setTypes([...types, newTypeData]))
    navigate('/')
  }

  const handleDeleteType = id => {
    typeService.deleteType(id)
      .then(deletedType => setTypes(types.filter(type => type._id !== deletedType._id)))
  }

  useEffect(() => {
    typeService.getAll()
      .then(allTypes => setTypes(allTypes))
  }, [])

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<TypesList types={types} user={user} handleDeleteType={handleDeleteType} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
        <Route
          path="/changePassword"
          element={user ? <ChangePassword handleSignupOrLogin={handleSignupOrLogin} /> : <Navigate to="/login" />}
        />
        <Route path='/add'
          element={<AddType handleAddType={handleAddType} />} />
      </Routes>
    </>
  )
}

export default App
