import { createBrowserRouter } from "react-router-dom"
import DashboardLayout from "../../Layout/DashboardLayout"
import Main from "../../Layout/Main"
import Appointment from "../../pages/Appointment/Appointment/Appointment"
import AddDoctor from "../../pages/Dashboard/AddDoctor/AddDoctor"
import AllUsers from "../../pages/Dashboard/AllUsers/AllUsers"
import ManageDoctors from "../../pages/Dashboard/ManageDoctors/ManageDoctors"
import MyAppointment from "../../pages/Dashboard/MyAppointment/MyAppointment"
import Payment from "../../pages/Dashboard/Payment/Payment"
import Home from "../../pages/Home/Home/Home"
import Login from "../../pages/Login/Login"
import ErrorPage from "../../pages/shared/ErrorPage/ErrorPage"
import SignUp from "../../pages/SignUp/SignUp"
import AdminRoute from "../AdminRoute"
import PrivateRoute from "../PrivateRoute"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/dashboard",
        element: <MyAppointment></MyAppointment>,
      },
      {
        path: "/dashboard/allUsers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/add-doctor",
        element: (
          <AdminRoute>
            <AddDoctor></AddDoctor>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manage-doctors",
        element: (
          <AdminRoute>
            <ManageDoctors></ManageDoctors>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: (
          <AdminRoute>
            <Payment></Payment>
          </AdminRoute>
        ),
        loader: async ({params}) => await fetch(`http://localhost:5000/bookings/${params.id}`)
      },
    ],
  },
]);

export default router