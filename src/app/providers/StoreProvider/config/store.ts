import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import type { IStateSchema } from './stateSchema';
import { counterReducer } from '@/entities/Counter';
import { userReducer } from '@/entities/User';

export function createReduxStore(initialState?: IStateSchema) {
    const rootReducer: ReducersMapObject<IStateSchema> = {
        counter: counterReducer,
        user: userReducer,
    };
    return configureStore<IStateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
