import logo from "./logo.svg";
import "./App.css";
import Exe1 from "./components/Exe1";
import Exe2 from "./components/Exe2";
import Exe3 from "./components/Exe3";
import Exe4 from "./components/Exe4";
import Exe5 from "./components/Exe5";
import Exe7 from "./components/Exe7";
import Exe8 from "./components/Exe8";
import Exe9 from "./components/Exe9";
import Navigation from "./components/ui/Navigation";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/click1",
        element: <Exe2 />,
    },
    { path: "/intro", element: <Exe1 /> },
    { path: "/click1", element: <Exe2 /> },
    { path: "/3clicks", element: <Exe3 /> },
    { path: "/counter", element: <Exe4 /> },
    { path: "/mapping", element: <Exe5 /> },
    { path: "/form", element: <Exe7 /> },
    { path: "/memes", element: <Exe8 /> },
    { path: "/flipper", element: <Exe9 /> },
]);
function App() {
    return (
        <div className="relative">
            <Navigation />
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
