import Main from "../../layot/Main";
import Home from "../../pages/home/Home";
import Login from "../../pages/login/Login";
const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/home",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      }
    ]
  }
]);

export default router;
