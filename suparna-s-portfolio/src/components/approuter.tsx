import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from "./Home";
import {Header} from "./Header";
interface Routeconfig {
    path: string;
    element: React.ReactElement;
}
    const routes: Routeconfig[]=[
        {path: "/", element: <Home/>},
        {path: "/home", element: <Home/>},
    ]

export const approuter: React.FC = () => {
	return (
      <BrowserRouter>
         <Header /> 
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    );
}
export default approuter;