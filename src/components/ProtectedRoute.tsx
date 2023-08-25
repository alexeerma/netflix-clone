
import { Navigate } from 'react-router-dom';
import { useAuth } from '../provider/AuthProvider';


const ProtectedRoute = ({children}) => {
  const { user } = useAuth();
    if(!user) {
        return <Navigate to="/login" />
    } else {
      return children;
    }
}

export default ProtectedRoute