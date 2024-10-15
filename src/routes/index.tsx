import { Dashboard } from "@/pages/app/dashboard";
import { SingIn } from "@/pages/auth/sing-in";
import { createBrowserRouter } from "react-router-dom";



export const router = createBrowserRouter([
  {
    path: '/', 
    element: <Dashboard />
  },
  {
    path: '/sing-in', 
    element: <SingIn />
  }
])
