import type { IStateSchema, IReduxStoreWithManager, IThunkConfig } from './config/stateSchema';
import { AppDispatch, createReduxStore } from './config/store';
import { StoreProvider } from './ui/StoreProvider';

export {
    StoreProvider,
    createReduxStore,
};

export type{
    IStateSchema,
    IReduxStoreWithManager,
    AppDispatch,
    IThunkConfig,
};
