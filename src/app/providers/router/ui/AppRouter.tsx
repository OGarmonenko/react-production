import React, { memo, Suspense, useMemo } from 'react';
import { RouteProps, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { routeConfig } from '@/shared/config/RouteConfig/routeConfig';
import { PageLoader } from '@/widgets/PageLoader/ui/PageLoader';
import { getUserAuthData } from '@/entities/User';

const AppRouter = () => {
    const isAuth = useSelector(getUserAuthData);

    const routes = useMemo(() => routeConfig.filter((route) => {
        if (route.authOnly && !isAuth) {
            return false;
        }

        return true;
    }), [isAuth]);

    return (
        <Routes>
            {routes.map(({ path, element }: RouteProps) => (
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
};

export default memo(AppRouter);
