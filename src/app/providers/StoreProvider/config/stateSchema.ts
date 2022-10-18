import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import type { ICounterSchema } from '@/entities/Counter';
import type { IUserSchema } from '@/entities/User';
import type { ILoginSchema } from '@/features/AuthByUsername';

export interface IStateSchema {
    counter: ICounterSchema;
    user: IUserSchema;

    // asyncReducers
    loginForm?: ILoginSchema;
}

export type StateSchemaKey = keyof IStateSchema;

export interface IReducerManager {
    getReducerMap: () => ReducersMapObject<IStateSchema>;
    reduce: (state: IStateSchema, action: AnyAction) => CombinedState<IStateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface IReduxStoreWithManager extends EnhancedStore<IStateSchema> {
    reducerManager: IReducerManager;
}
