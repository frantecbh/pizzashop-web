import { AppLayout } from "@/pages/_layouts/app";
import { AuthLayout } from "@/pages/_layouts/auth";
import { Dashboard } from "@/pages/app/dashboard";
import { SingIn } from "@/pages/auth/sing-in";
import { createBrowserRouter } from "react-router-dom";



export const router = createBrowserRouter([
  {
    path: '/', 
    element: <AppLayout />,
    children:[{path: '/', element: <Dashboard />}]
  },
  {
    path: '/', 
    element: <AuthLayout />,
    children:[{path: '/sing-in', element: <SingIn />}]
  }, 
])
