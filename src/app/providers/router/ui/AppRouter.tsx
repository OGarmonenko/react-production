import React, {Suspense} from 'react';
import {RouteProps, Routes, Route} from "react-router-dom";
import {routeConfig} from "@/shared/config/RouteConfig/routeConfig";

export const AppRouter = () => {
    return (
        <Routes>
            {routeConfig.map(({path, element}: RouteProps) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <Suspense fallback={<div>Loading...</div>}>
                            <div className="wrapper-page">
                                {element}
                            </div>
                        </Suspense>
                    )}
                />
            ))}
        </Routes>
    );
};
