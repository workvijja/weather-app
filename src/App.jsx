import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from "@/modules/Home/index.jsx";
import {Card, CardContent} from "@/components/ui/card.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    }
])

const CenteredContainer = ({children}) => {
    return (
        <div className="h-screen w-screen overflow-hidden flex items-center justify-center">
            <div className={"rounded-lg border shadow-sm overflow-auto sm:overflow-hidden px-8 py-6 w-full sm:w-[600px] lg:w-[800px] h-full sm:h-[600px]"}>
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
