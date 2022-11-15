import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/Authcontext/Authprovaider";

const Privaterouts = ({ children }) => {
  const { user, loding } = useContext(AuthContext);
  const location = useLocation();

  if (loding) {
    return <progress className="progress w-56"></progress>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ form: location }} replace></Navigate>;
};

export default Privaterouts;
