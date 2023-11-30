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
import MakeCouponPage from "../Pages/DashBoardPages/AdminPage/MakeCouponPage";
import MakePayment from "../Pages/DashBoardPages/MemberPage.jsx/MakePayment";
import MakePaymentPage from "../Pages/DashBoardPages/MemberPage.jsx/MakePaymentPage";
import PaymentHistory from "../Pages/DashBoardPages/MemberPage.jsx/PaymentHistory";
import AdminProfile from "../Pages/DashBoardPages/AdminPage/AdminProfile";
import MyProfileUser from "../Pages/DashBoardPages/UserPage.jsx/MyProfileUser";
import AnnouncementUser from "../Pages/DashBoardPages/UserPage.jsx/AnnouncementUser";

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
            element: <Apartment></Apartment>,
            loader:()=>fetch('https://eminent-estates-server-side.vercel.app/apartmentCount')
         },
         {
            path: 'register',
            element: <RegistrationPage></RegistrationPage>
         }
      ]
   },
   {
      path: 'dashboard',
      element: <DashboardLayOut></DashboardLayOut>,
      children: [
         // adminLayOut
         {
            path:'adminProfile',
            element: <AdminPrivateRoute><AdminProfile></AdminProfile></AdminPrivateRoute>
         },
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
            path: 'manageCoupon',
            element: <AdminPrivateRoute>
               <MakeCouponPage></MakeCouponPage>
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
           path:'memberProfile',
            element:<MemberPrivateRoute><MyProfile></MyProfile></MemberPrivateRoute> 
               
         },
         {
            path: 'makePayment',
            element:<MemberPrivateRoute><MakePayment></MakePayment></MemberPrivateRoute>
               
         },
         {
            path: 'makePaymentPage',
            element:<MemberPrivateRoute><MakePaymentPage></MakePaymentPage></MemberPrivateRoute>
               
         },
         {
            path: 'paymentHistory',
            element:<MemberPrivateRoute><PaymentHistory></PaymentHistory></MemberPrivateRoute>
               
         },
         {
            path: 'announcementMember',
            element:<MemberPrivateRoute> <AnnouncementMember></AnnouncementMember></MemberPrivateRoute>
               
         },
         // user Routes
         {
            path:'userProfile',
            element:<PrivateRoute><MyProfileUser></MyProfileUser></PrivateRoute>
               
         },
         {
            path: 'announcementUser',
            element:<PrivateRoute><AnnouncementUser></AnnouncementUser></PrivateRoute>
               
         },
        
      
      ]
   }
]);

export default Routes;