import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";


const Body =()=>{

    const bodyRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path: "/browse",
            element: <Browse/>
        }
    ])

    return(<div>
     <RouterProvider router={bodyRouter}/>
    </div>)
}
export default  Body ;