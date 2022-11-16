import { IStateSchema } from '@/app/providers/StoreProvider';

export const getArticleRecommendationsIsLoading = (state: IStateSchema) => {
    return state.articleDetailsPage?.recommendations?.isLoading;
};

export const getArticleRecommendationsError = (state: IStateSchema) => {
    return state.articleDetailsPage?.recommendations?.error;
};
