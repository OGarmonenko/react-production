import { EntityState } from '@reduxjs/toolkit';
import {
    IArticle, ArticleView, ArticleType, ArticleSortField,
} from '@/entities/Article';
import { SortOrder } from '@/shared/types';

export interface ArticlesPageSchema extends EntityState<IArticle> {
    isLoading?: boolean;
    error?: string;
    // pagination
    page: number;
    limit: number;
    hasMore: boolean;
    // filters
    view: ArticleView;
    order: SortOrder;
    sort: ArticleSortField;
    search:string;
    type: ArticleType;

    _inited: boolean;
}
