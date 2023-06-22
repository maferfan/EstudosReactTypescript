import { Route, Routes, useRoutes } from "react-router-dom";
import { About } from "../pages/About";
import { Home } from "../pages/Home";
import { RequireAuth } from "../components/RequireAuth";

export function RouteList() {
    return useRoutes([
        { path:"/", element: <Home/>},
        { path:"/", element: <RequireAuth><About/></RequireAuth>}
    ])
}