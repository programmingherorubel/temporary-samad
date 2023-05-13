import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const RequredRoute = ({children}) => {
    const {user,dataLoading} = useContext(AuthContext)
  
    if(dataLoading){
        return  <progress className="progress w-56"></progress>
    }

    if(user?.email){
        return children
    }


    return <Navigate to='/login' replace></Navigate>
};

export default RequredRoute;