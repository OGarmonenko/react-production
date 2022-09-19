import React, { Suspense } from 'react';
import {RouteProps, Routes, Route} from "react-router-dom";
import {routeConfig} from "@/shared/config/RouteConfig/routeConfig";

export const AppRouter = () => {
    return (
        <Suspense fallback = {<div>Loading...</div>}>
            <Routes>
                {routeConfig.map(({path, element}: RouteProps) => (
                    <Route
                        key = {path}
                        path = {path}
                        element = {element}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};
