import { configureStore } from '@reduxjs/toolkit';
import { IStateSchema } from './stateSchema';
import { counterReducer } from '@/entities/Counter';

export function createReduxStore(initialState?: IStateSchema) {
    return configureStore<IStateSchema>({
        reducer: {
            counter: counterReducer,
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
