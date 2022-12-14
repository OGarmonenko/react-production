import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUser, userActions, UserRole } from '@/entities/User';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import { IThunkConfig } from '@/app/providers/StoreProvider';

interface ILoginByUsernameProps {
    username: string;
    password: string;
}
export const loginByUsername = createAsyncThunk<IUser, ILoginByUsernameProps, IThunkConfig<string>>(
    'login/loginByUserName',
    async (authData, thunkApi) => {
        const { extra, dispatch, rejectWithValue } = thunkApi;
        try {
            const response = await extra.api.post<IUser>('/login', authData);

            if (!response.data) {
                throw new Error();
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));
            // extra.navigate('/about');
            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
