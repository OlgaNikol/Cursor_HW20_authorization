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
        index: '/',
        element: <Navigate to='signInUp/in' />
    },
    {
        path: 'signInUp/:type',
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