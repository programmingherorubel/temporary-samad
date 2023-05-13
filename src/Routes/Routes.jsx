import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Bookings from "../Pages/Bookings/Bookings";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Home from "../Pages/Home/Home/Home";
import ServiceDetails from "../Pages/Home/Services/ServiceDetails";
import ServiceRight from "../Pages/Home/Services/ServiceRight";
import Login from "../Pages/Login/Login";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";
import SignUp from "../Pages/SignUp/SignUp";
import RequredRoute from "./RequredRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signUp',
          element: <SignUp></SignUp>
        },
        {
          path: '/serviceDetails/:id',
          element: <ServiceDetails/>,
          loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: '/checkout/:id',
          element:<RequredRoute><CheckOut></CheckOut></RequredRoute>,
          loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`) 
        },
        {
          path: '/bookings',
          element:<Bookings></Bookings>
        },
        {
          path: '/serviceRight',
          element: <ServiceRight></ServiceRight>,
        }
      ]
    },
    {
        path: '/header',
        element: <Header></Header>
    },
    {
        path: '/footer',
        element: <Footer></Footer>
    }
  ]);

  export default router;