import { RouterProvider } from "react-router"
import App from "./App"
import { createBrowserRouter } from "react-router-dom"
import Mainm from "./Mainm"
import Shops from "./Shop"



const router=createBrowserRouter([
    {
        path:'/',
        element: <Mainm/>
    },
    {
        path: 'shop',
        element: <Shops/>
    }
])

function Dom() {
  return (
    <div>
        <App/>
        <RouterProvider router={router}/>
    </div>
  )
}

export default Dom