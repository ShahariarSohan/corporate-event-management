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
        loader: () => fetch("events.json"),
      },
      {
        path: "/events/:id",
        element: <EventDetail></EventDetail>,
        loader: () => fetch("events.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
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
    ],
  },
]);

export default router;
