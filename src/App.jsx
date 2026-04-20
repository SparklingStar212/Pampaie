// import yup from yup
import { Route, Routes } from 'react-router-dom'
import Signup from './Pages/Signup'
import Signin from './Pages/Signin'
import Dashboard from './Pages/Dashboard'


const App = () => {
  return (
    <>

      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/login' element={<Signin />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>


    </>
  )
}

export default App