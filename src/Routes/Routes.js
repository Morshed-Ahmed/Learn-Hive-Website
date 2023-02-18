import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ForgotPassword from "../Pages/Authentication/ForgotPassword/ForgotPassword";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/RoutePages/Blog/Blog";
import AllCourses from "../Pages/RoutePages/Courses/AllCourses/AllCourses";
import Courses from "../Pages/RoutePages/Courses/Courses/Courses";
import CoursesDetails from "../Pages/RoutePages/Courses/CoursesDetails/CoursesDetails";
import CoursesHome from "../Pages/RoutePages/Courses/CoursesHome";
import Faq from "../Pages/RoutePages/Faq/Faq";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

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
    element: (
      <PrivateRoute>
        <CoursesHome />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/courses",
        element: <AllCourses />,
      },
      {
        path: "/courses/:name",
        element: <Courses />,
      },
      {
        path: "/courses/details/:id",
        element: <CoursesDetails />,
      },
    ],
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/faq",
    element: <Faq />,
  },
]);

export default router;
