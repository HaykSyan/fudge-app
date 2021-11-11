import { lazy, memo } from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "../routes";

const DashboardHeader = lazy(() => import('../components/dashboard/header'));

const DashboardContent = (props) => (
    <div className="content" >
        <DashboardHeader />
        <Routes>
            {routes.map((route, index) => {
                return route.component && (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        element={(<route.component routeName={route.name} {...props} />)}
                    />
                )
            })}
        </Routes>
    </div>
);

export default memo(DashboardContent);
