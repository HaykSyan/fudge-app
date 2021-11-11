import React, { memo } from "react";
import { Routes, Route } from "react-router-dom";
import { mainRoutes } from "../routes";

const MainLayout = (props) => {
    return (
        <main className="__main">
            <Routes>
                {mainRoutes.map((route, index) => {
                    return route.component && (
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            name={route.name}
                            element={(<route.component />)}
                        />
                    )
                })}
            </Routes>
        </main>
    )
} 

export default memo(MainLayout);
