import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Roots from "./Root/Roots.jsx";
import ErrorPage from "./component/ErrorPage/ErrorPage.jsx";
import Home from "./component/Home/Home.jsx";
import DashboardLayout from "./component/DashboardLayout/DashboardLayout.jsx";
import Dashboard from "./component/DashboardPages/Dashboard.jsx";
import CoustomApp from "./component/DashboardPages/CoustomApp.jsx";
import Marketing from "./component/DashboardPages/Marketing.jsx";
import Membership from "./component/DashboardPages/Membership.jsx";
import BrandSetUp from "./component/DashboardPages/BrandSetUp.jsx";
import DashboardCustomAppNew from "./component/DashboardCustomNew/DashboardCustomAppNew.jsx";
import Preview from "./component/DashboardPreview/Preview.jsx";
import Login from "./component/Pages/login.jsx";
import Register from "./component/Pages/Register.jsx";
import ForgetPassword from "./component/Pages/ForgetPassword.jsx";
import VerificationForget from "./component/Pages/VerificationForget.jsx";
import SetNewPassword from "./component/Pages/SetNewPassword.jsx";
import VerificationRegister from "./component/Pages/VerificationRegister.jsx";
import Chatbot from "./component/DashboardPages/Chatbot.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/register",
    element:<Register/>
  },
  {
    path:"/forget_password",
    element:<ForgetPassword/>
  },
  {
    path:"/forget_password_register",
    element:<VerificationRegister/>
  },
  {
    path:"/forget_password_verification",
    element:<VerificationForget/>
  },
  {
    path:"/set_New_Password",
    element:<SetNewPassword/>
  },

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/dashboard/custom_app",
        element: <CoustomApp />,
      },
      {
        path: "/dashboard/chatbot",
        element: <Chatbot />,
      },
      {
        path: "/dashboard/markeding",
        element: <Marketing />,
      },
      {
        path: "/dashboard/membership",
        element: <Membership />,
      },
      {
        path: "/dashboard/brandSetUp",
        element: <BrandSetUp />,
      },
      {
        path: "/dashboard/custom_app/new",
        element: <DashboardCustomAppNew />,
      },
      {
        path: "/dashboard/preview",
        element: <Preview />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </StrictMode>
);
