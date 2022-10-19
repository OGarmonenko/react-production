import { StoreProvider } from './ui/StoreProvider';
import { AppDispatch, createReduxStore } from './config/store';
import type { IStateSchema } from './config/stateSchema';
import { IReduxStoreWithManager } from './config/stateSchema';

export {
    StoreProvider,
    createReduxStore,
    IStateSchema,
    IReduxStoreWithManager,
    AppDispatch,
};
