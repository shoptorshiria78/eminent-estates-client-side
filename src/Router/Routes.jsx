import {createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOuts/MainLayOut/MainLayOut";
import HomePage from "../Pages/MainPages/HomePage";
import LogInPage from "../Pages/MainPages/LogInPage";
import RegistrationPage from "../Pages/MainPages/RegistrationPage";

const Routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      children:[
        {
           path:'/',
           element:<HomePage></HomePage>
        },
        {
           path:'login',
           element:<LogInPage></LogInPage>
        },
        {
           path:'register',
           element:<RegistrationPage></RegistrationPage>
        }
      ]
    },
  ]);

export default Routes;