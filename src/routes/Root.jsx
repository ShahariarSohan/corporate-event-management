import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Events from "../pages/Events";
import EventDetail from "../pages/EventDetail";
import Dashboard from "../pages/Dashboard";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "../privateRoutes/PrivateRoute";
import Profile from "../components/Profile";
import UpdateProfile from "../components/UpdateProfile";
import ForgetPassword from "../pages/ForgetPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/events",
        element: <Events></Events>,
      },
      {
        path: "/events/:id",
        element: (
          <PrivateRoute>
            <EventDetail></EventDetail>
          </PrivateRoute>
        ),
        loader: () => fetch(`events.json`),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
        children: [
          {
            path: "",
            element: <Profile></Profile>,
          },
          {
            path: "updateProfile",
            element: <UpdateProfile></UpdateProfile>,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/forgetPassword",
        element: <ForgetPassword></ForgetPassword>,
      },
    ],
  },
]);

export default router;
