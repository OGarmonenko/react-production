import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { IStateSchema } from '@/app/providers/StoreProvider/config/stateSchema';

interface IStoreProviderProps {
    children?: ReactNode;
    initialState?: IStateSchema;
}

export const StoreProvider = ({ children, initialState }: IStoreProviderProps) => {
    const store = createReduxStore(initialState);
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
