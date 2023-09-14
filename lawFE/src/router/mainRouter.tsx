import {createBrowserRouter} from 'react-router-dom'
import Layout from '../components/common/Layout'
import HomeScreen from '../Pages/HomeScreen'
import Register from '../Pages/auth/Register'
import Login from '../Pages/auth/Login'
import ResetPassword from '../Pages/auth/ResetPassword'
import ChangePassword from '../Pages/auth/ChangePassword'

export const mainRoute= createBrowserRouter([
    {
        path:"/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <HomeScreen/>
            }
        ]
    },{
        path: "register",
        element: <Register/>
    },
    {
        path: "sign-in",
        element: <Login/>
    },
    {
        path: "reset-password",
        element: <ResetPassword/>
    },
    {
        path: "change-password",
        element: <ChangePassword/>
    },
])
