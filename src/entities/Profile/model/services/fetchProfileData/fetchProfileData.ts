import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from '@/app/providers/StoreProvider';
import type { IProfile } from '../../types/IProfile';

export const fetchProfileData = createAsyncThunk<
    IProfile,
    string,
    IThunkConfig<string>
    >(
        'profile/fetchProfileData',
        async (profileID, thunkApi) => {
            const { extra, rejectWithValue } = thunkApi;

            try {
                const response = await extra.api.get<IProfile>(`/profile/${profileID}`);

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                console.log(e);
                return rejectWithValue('error');
            }
        },
    );
