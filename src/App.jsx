import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from "@/modules/Home/index.jsx";
import {Card, CardContent} from "@/components/ui/card.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    }
])

// const CenteredContainer = ({children}) => {
//     return (
//         <div className="md:mx-auto md:max-w-md px-4 py-8 bg-white rounded-lg shadow-md overflow-hidden">
//             {children}
//         </div>
//     );
// };

const CenteredContainer = ({children}) => {
    return (
        <div className="h-screen w-screen overflow-hidden flex items-center justify-center">
            <div className={"rounded-lg border shadow-sm px-8 py-6 w-full sm:w-[600px] lg:w-[800px] h-full sm:h-[600px]"}>
                {children}
            </div>
        </div>
    );
};

function App() {

    return (
        <CenteredContainer>
            <RouterProvider router={router}/>
        </CenteredContainer>
    )
}

export default App
