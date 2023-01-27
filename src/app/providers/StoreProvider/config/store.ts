import {
    CombinedState, configureStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';

// import { To } from 'history';
// import { NavigateOptions } from 'react-router';
import type { IStateSchema, IThunkExtraArg } from './stateSchema';

import { createReducerManager } from '@/app/providers/StoreProvider/config/reducerManager';
import { counterReducer } from '@/entities/Counter';
import { userReducer } from '@/entities/User';
import { scrollPositionReducer } from '@/features/SaveScrollPosition';
import { $api } from '@/shared/api/api';
import { rtkApi } from '@/shared/api/rtkApi';

export function createReduxStore(
    initialState?: IStateSchema,
    asyncReducers?: ReducersMapObject<IStateSchema>,
    // navigate?: (to: To, options?: NavigateOptions) => void,
) {
    const rootReducer: ReducersMapObject<IStateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
        scrollPosition: scrollPositionReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
    };

    const reducerManager = createReducerManager(rootReducer);

    const extraArg: IThunkExtraArg = {
        api: $api,
        // navigate,
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<IStateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            },
        }).concat(rtkApi.middleware),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
