import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOuts/MainLayOut/MainLayOut";
import HomePage from "../Pages/MainPages/HomePage";
import LogInPage from "../Pages/MainPages/LogInPage";
import RegistrationPage from "../Pages/MainPages/RegistrationPage";
import Apartment from "../Pages/MainPages/Apartment";
import DashboardLayOut from "../LayOuts/DashBoardLayOut/DashBoardLayOut";
import ManageMembers from "../Pages/DashBoardPages/AdminPage/ManageMembers";
import AdminPrivateRoute from "../PrivateRoute/AdminPrivateRoute";
import MakeAnnouncement from "../Pages/DashBoardPages/AdminPage/MakeAnnouncement";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AgreementPage from "../Pages/DashBoardPages/AdminPage/AgreementPage";
import MyProfile from "../Pages/DashBoardPages/MemberPage.jsx/MyProfile";
import MemberPrivateRoute from "../PrivateRoute/MemberPrivateRoute";
import AnnouncementMember from "../Pages/DashBoardPages/MemberPage.jsx/AnnouncementMember";

const Routes = createBrowserRouter([
   {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      children: [
         {
            path: '/',
            element: <HomePage></HomePage>
         },
         {
            path: 'login',
            element: <LogInPage></LogInPage>
         },
         {
            path: 'apartment',
            element: <Apartment></Apartment>
         },
         {
            path: 'register',
            element: <RegistrationPage></RegistrationPage>
         }
      ]
   },
   {
      path: 'dashboard',
      element: <PrivateRoute><DashboardLayOut></DashboardLayOut></PrivateRoute>,
      children: [
         // adminLayOut
         {
            path: 'manageMember',
            element: <AdminPrivateRoute><ManageMembers></ManageMembers></AdminPrivateRoute>
         },
         {
            path: 'makeAnnouncement',
            element: <AdminPrivateRoute>
               <MakeAnnouncement></MakeAnnouncement>
            </AdminPrivateRoute>
         }
         ,
         {
            path: 'agreementRequest',
            element: <AdminPrivateRoute>
               <AgreementPage></AgreementPage>
            </AdminPrivateRoute>
         },
          // memberLayOut
         {
            path: 'myProfile',
            element:<MemberPrivateRoute> <MyProfile></MyProfile></MemberPrivateRoute>
               
         },
         {
            path: 'announcementMember',
            element:<MemberPrivateRoute> <AnnouncementMember></AnnouncementMember></MemberPrivateRoute>
               
         }
        
      
      ]
   }
]);

export default Routes;