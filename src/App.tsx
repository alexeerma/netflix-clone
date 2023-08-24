import { Route, Routes } from 'react-router'
import { Navbar } from './components'
import Home from './pages/Home'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Account from './pages/Account';
import { AuthProvider } from './provider/AuthProvider';

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/account' element={<Account />} />
        </Routes>
      </AuthProvider>
    </>
      
     
  
  )
}

export default App
