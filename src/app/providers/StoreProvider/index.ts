import { StoreProvider } from './ui/StoreProvider';
import { AppDispatch, createReduxStore } from './config/store';
import type { IStateSchema, IReduxStoreWithManager, IThunkConfig } from './config/stateSchema';

export {
    StoreProvider,
    createReduxStore,
    IStateSchema,
    IReduxStoreWithManager,
    AppDispatch,
    IThunkConfig,
};
