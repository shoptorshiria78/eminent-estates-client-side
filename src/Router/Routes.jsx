import {createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOuts/MainLayOut/MainLayOut";
import HomePage from "../Pages/MainPages/HomePage";
import LogInPage from "../Pages/MainPages/LogInPage";
import RegistrationPage from "../Pages/MainPages/RegistrationPage";
import Apartment from "../Pages/MainPages/Apartment";
import DashboardLayOut from "../LayOuts/DashBoardLayOut/DashBoardLayOut";
import ManageMembers from "../Pages/DashBoardPages/AdminPage/ManageMembers";
import AdminPrivateRoute from "../PrivateRoute/AdminPrivateRoute";

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
           path:'apartment',
           element:<Apartment></Apartment>
        },
        {
           path:'register',
           element:<RegistrationPage></RegistrationPage>
        }
      ]
    },
    {
       path: 'dashboard',
       element:<DashboardLayOut></DashboardLayOut>,
       children:[
         // adminLayOut
         {
            path:'manageMember',
            element:<AdminPrivateRoute><ManageMembers></ManageMembers></AdminPrivateRoute>
         }
       ]
    }
  ]);

export default Routes;