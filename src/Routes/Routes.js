import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ForgotPassword from "../Pages/Authentication/ForgotPassword/ForgotPassword";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import Home from "../Pages/Home/Home/Home";
import Courses from "../Pages/RoutePages/Courses/Courses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/forgotPassword",
        element: <ForgotPassword />,
      },
    ],
  },
  {
    path: "/courses",
    element: <Courses />,
  },
]);

export default router;
