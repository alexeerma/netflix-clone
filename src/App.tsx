import { Route, Routes } from 'react-router'
import { Navbar } from './components'
import Home from './pages/Home'
import Login from './pages/Login';
import SignUp  from './pages/Signup';
import Account from './pages/Account';
import { AuthProvider } from './provider/AuthProvider';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route 
            path='/account' 
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
             } 
            />
        </Routes>
      </AuthProvider>
    </>
      
     
  
  )
}

export default App
