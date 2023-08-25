import { Navigate } from 'react-router-dom';
import { useAuth, AuthProviderProps } from '../provider/AuthProvider';


const ProtectedRoute = ({children}: AuthProviderProps): JSX.Element => {
  const { user } = useAuth();
    if(!user) {
        return <Navigate to="/login" />
    } else {
      return <>{children}</>
    }
}

export default ProtectedRoute