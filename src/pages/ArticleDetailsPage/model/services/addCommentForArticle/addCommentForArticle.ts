import { createAsyncThunk } from '@reduxjs/toolkit';

import {
    fetchCommentsByArticleId,
} from '../../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

import { IThunkConfig } from '@/app/providers/StoreProvider';
import { getArticleDetailsData } from '@/entities/Article/model/selectors/articleDetails';
import { IComment } from '@/entities/Comment';
import { getUserAuthData } from '@/entities/User';

export const addCommentForArticle = createAsyncThunk<
    IComment,
    string,
    IThunkConfig<string>
    >(
        'articleDetails/addCommentForArticle',
        async (text, thunkApi) => {
            const {
                extra, dispatch, rejectWithValue, getState,
            } = thunkApi;

            const userData = getUserAuthData(getState());
            const article = getArticleDetailsData(getState());

            if (!userData || !text || !article) {
                return rejectWithValue('no data');
            }

            try {
                const response = await extra.api.post<IComment>('/comments', {
                    articleId: article.id,
                    userId: userData.id,
                    text,
                });

                if (!response.data) {
                    throw new Error();
                }

                dispatch(fetchCommentsByArticleId(article.id));

                return response.data;
            } catch (e) {
                return rejectWithValue('error');
            }
        },
    );
