import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

// import { To } from 'history';
// import { NavigateOptions } from 'react-router';
import type { IArticleDetailsSchema } from '@/entities/Article';
import type { ICounterSchema } from '@/entities/Counter';
import type { IUserSchema } from '@/entities/User';
import type { ILoginSchema } from '@/features/AuthByUsername';
import { ISaveScrollSchema } from '@/features/SaveScrollPosition';
import { AddCommentFormSchema } from '@/features/addCommentForm';
import { IProfileSchema } from '@/features/editableProfileCard';
import { ArticleDetailsPageSchema } from '@/pages/ArticleDetailsPage';
import { ArticlesPageSchema } from '@/pages/ArticlesPage';
import { rtkApi } from '@/shared/api/rtkApi';

export interface IStateSchema {
    counter: ICounterSchema;
    user: IUserSchema;
    scrollPosition: ISaveScrollSchema;
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

    // asyncReducers
    loginForm?: ILoginSchema;
    profile?: IProfileSchema;
    articleDetails?: IArticleDetailsSchema;
    addCommentForm?: AddCommentFormSchema;
    articlesPage?: ArticlesPageSchema;
    articleDetailsPage?: ArticleDetailsPageSchema;
}

export type StateSchemaKey = keyof IStateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>

export interface IReducerManager {
    getReducerMap: () => ReducersMapObject<IStateSchema>;
    reduce: (state: IStateSchema, action: AnyAction) => CombinedState<IStateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
    // true - mounted
    getMountedReducer: () => MountedReducers;
}

export interface IReduxStoreWithManager extends EnhancedStore<IStateSchema> {
    reducerManager: IReducerManager;
}

export interface IThunkExtraArg {
    api: AxiosInstance;
 //   navigate?: (to: To, options?: NavigateOptions) => void,
}

export interface IThunkConfig<T> {
    rejectValue: T;
    extra: IThunkExtraArg;
    state: IStateSchema;
}
