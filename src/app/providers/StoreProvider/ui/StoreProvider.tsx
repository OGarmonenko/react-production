import { ReducersMapObject } from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';

// import { useNavigate } from 'react-router-dom';
import { createReduxStore } from '../config/store';

import type { IStateSchema } from '@/app/providers/StoreProvider/config/stateSchema';

interface IStoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<IStateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>;
}

export const StoreProvider = (props: IStoreProviderProps) => {
    const {
        children,
        initialState,
        asyncReducers,
    } = props;

    //  const navigate = useNavigate();

    // const store = useMemo(() => createReduxStore(
    //     initialState as IStateSchema,
    //     asyncReducers as ReducersMapObject<IStateSchema>,
    //     navigate,
    // ), [asyncReducers, initialState, navigate]);

    const store = createReduxStore(
        initialState as IStateSchema,
        asyncReducers as ReducersMapObject<IStateSchema>,
        //   navigate,
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
