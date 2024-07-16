import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage,Layout } from "../pages";
import { DashBoardPage, ProfilePage } from "../pages/admin";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement:<div><h1>404 not found</h1></div>,
      children:[
        {
          index: true,
          element:<HomePage />
        },
        {
          path: "admin",
          children: [
            {
              index: true, //prothomtake index route hisabe rakhbo.er porergula por por ashbe
              element: <div>Admin App</div>,
            },
            {
              path: "profile", //baire slash dile bhitore slash deyar dorkar nai
              element: <ProfilePage/>
            },
            {
              path: "dashboard",
              element:<DashBoardPage/>//baire slash dile bhitore slash deyar dorkar nai
              
            },
          ],
        },
      ]
    },
    
    {
      path: "/login",
      element: <div>Login page</div>,
    },
  ]);
  
  export function AppRouter({children}){
    return <RouterProvider router={router}>{children}</RouterProvider>
  }