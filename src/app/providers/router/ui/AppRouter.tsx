import React, { Suspense } from 'react';
import { RouteProps, Routes, Route } from 'react-router-dom';
import { routeConfig } from '@/shared/config/RouteConfig/routeConfig';
import { PageLoader } from '@/widgets/PageLoader/ui/PageLoader';

export const AppRouter = () => (
    <Routes>
        {routeConfig.map(({ path, element }: RouteProps) => (
            <Route
                key={path}
                path={path}
                element={(
                    <Suspense fallback={<PageLoader />}>
                        <div className="wrapper-page">
                            {element}
                        </div>
                    </Suspense>
                )}
            />
        ))}
    </Routes>
);
