import { createAsyncThunk } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import type { IThunkConfig } from '@/app/providers/StoreProvider';
import type { IArticle } from '@/entities/Article';
import {
    getArticlesPageLimit, getArticlesPageNum,
    getArticlesPageOrder, getArticlesPageSearch,
    getArticlesPageSort, getArticlesPageType,
} from '@/pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { addQueryParams } from '@/shared/lib/url/addQueryParams/addQueryParams';
import { ArticleType } from '@/entities/Article';

interface FetchArticlesListProps {
    page?: number;
    replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<
    IArticle[],
    FetchArticlesListProps,
    IThunkConfig<string>
    >(
        'articlesPage/fetchArticlesList',
        async (props, thunkApi) => {
            const { extra, rejectWithValue, getState } = thunkApi;
            const { page = 1 } = props;
            const limit = getArticlesPageLimit(getState());
            const sort = getArticlesPageSort(getState());
            const order = getArticlesPageOrder(getState());
            const search = getArticlesPageSearch(getState());
            const type = getArticlesPageType(getState());
            // const page = getArticlesPageNum(getState());

            try {
                addQueryParams({
                    sort, order, search, type,
                });
                const response = await extra.api.get<IArticle[]>('/articles', {
                    params: {
                        _expand: 'user',
                        _limit: limit,
                        _page: page,
                        _sort: sort,
                        _order: order,
                        q: search,
                        type: type === ArticleType.ALL ? undefined : type,
                    },
                });

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                return rejectWithValue('error');
            }
        },
    );
