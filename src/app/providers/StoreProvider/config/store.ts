import { configureStore, DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import type { IStateSchema } from './stateSchema';
import { counterReducer } from '@/entities/Counter';
import { userReducer } from '@/entities/User';
import { createReducerManager } from '@/app/providers/StoreProvider/config/reducerManager';

// eslint-disable-next-line max-len
export function createReduxStore(initialState?: IStateSchema, asyncReducers?: ReducersMapObject<IStateSchema>) {
    const rootReducer: ReducersMapObject<IStateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducer);

    const store = configureStore<IStateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
