import {
  BrowserRouter as Router,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import { lazy, Suspense } from "react";

// I use RootLayout to wrap all pages with common layout components like Navbar and Footer
import RootLayout from "./Components/Layouts/RootLayout.jsx";

// Lazy load page components for better performance
const Home = lazy(() => import("./Components/Pages/Home/Home.jsx"));
const SignUp = lazy(() => import("./Components/Pages/Auth/SignUp.jsx"));
const SignUPT = lazy(() => import("./Components/Pages/Auth/SignUPT.jsx"));
const SignUpH = lazy(() => import("./Components/Pages/Auth/SignUPH.jsx"));
const Login = lazy(() => import("./Components/Pages/Auth/Login.jsx"));
const NotFound = lazy(() => import("./Components/Pages/NotFound/NotFound.jsx"));

const App = () => {
  const routes = createHashRouter([
    // Define the main route with RootLayout and nested routes
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Login/> },

        { path: "*", element: <NotFound /> },
      ],
    },

    // Separate routes for authentication pages
    {
      path: "SignUp",
      element: (
        <Suspense
          fallback={
            <div
              className="animate-spin 
                          flex items-center justify-center
                          rounded-full 
                          h-12 w-12 
                          border-4 
                          border-t-transparent 
                       border-blue-500"
            ></div>
          }
        >
          <SignUp />
        </Suspense>
      ),
    },
    {
      path: "SignUPT",
      element: (
        <Suspense
          fallback={
            <div
              className="animate-spin 
                          flex items-center justify-center
                          rounded-full 
                          h-12 w-12 
                          border-4 
                          border-t-transparent 
                       border-blue-500"
            ></div>
          }
        >
          <SignUPT />
        </Suspense>
      ),
    },
    {
      path: "SignUpH",
      element: (
        <Suspense
          fallback={
            <div
              className="animate-spin 
                          flex items-center justify-center
                          rounded-full 
                          h-12 w-12 
                          border-4 
                          border-t-transparent 
                       border-blue-500"
            ></div>
          }
        >
          <SignUpH />
        </Suspense>
      ),
    },
    {
      path: "Login",
      element: (
        <Suspense
          fallback={
            <div
              className="animate-spin 
                          flex items-center justify-center
                          rounded-full 
                          h-12 w-12 
                          border-4 
                          border-t-transparent 
                       border-blue-500"
            ></div>
          }
        >
          <Login />
        </Suspense>
      ),
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default App;
