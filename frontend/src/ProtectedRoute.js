import { useContext } from "react";
import UserContext from "./UserContext";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ exact, path, children }) => {
    const { user } = useContext(UserContext);

    if(!user) {
        return <Redirect to="/login"/>
    };

    return (
        <Route exact={exact} path={path}>
          {children}
        </Route>
      );
}

export default ProtectedRoute;