import { createAsyncThunk } from '@reduxjs/toolkit';

import type { IArticle } from '../../types/article';

import type { IThunkConfig } from '@/app/providers/StoreProvider';

export const fetchArticleById = createAsyncThunk<
    IArticle,
    string | undefined,
    IThunkConfig<string>
    >(
        'articleDetails/fetchArticleById',
        async (articleId, thunkApi) => {
            const { extra, rejectWithValue } = thunkApi;

            try {
                if (!articleId) {
                    throw new Error();
                }
                const response = await extra.api.get<IArticle>(`/articles/${articleId}`, {
                    params: {
                        _expand: 'user',
                    },
                });

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
