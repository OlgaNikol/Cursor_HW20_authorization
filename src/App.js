import './App.css';
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";

import SignInUpPage from "./pages/sign-in-up";

const NotFound = () => {
    return (
        <h1>The Page Not Found</h1>
    )
}

const router = createBrowserRouter([
    {
        path: '/Cursor_HW20_authorization/',
        element: <Navigate to='/Cursor_HW20_authorization/signInUp/in' />
    },
    {
        path: '/Cursor_HW20_authorization/signInUp/:type',
        element: <SignInUpPage/>
    },
    {
        path: '*',
        element: <NotFound/>
    }
]);

function App() {
    return (
        <RouterProvider router={router}/>
    );
}

export default App;