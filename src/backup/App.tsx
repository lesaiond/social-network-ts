import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { Dz31x } from "./dz/31x";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage";
import { ForgetPasswordPage } from "./pages/ForgetPasswordPage/ForgetPasswordPage";

const routerConfig = createBrowserRouter([
  {
    path: "/dz",
    element: <Dz31x />,
  },
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
  {
    path: '/registration',
    element: <RegistrationPage />,
  },
  {
    path: '/forgetPassword',
    element: <ForgetPasswordPage />,
  },
])

const App: React.FC = () => {
  return (
    <div className="App">
      <RouterProvider router={routerConfig} />
    </div>
  );
};

export default App;
