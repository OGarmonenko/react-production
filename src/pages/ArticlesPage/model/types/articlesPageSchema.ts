import { EntityState } from '@reduxjs/toolkit';
import { IArticle, ArticleView } from '@/entities/Article';

export interface ArticlesPageSchema extends EntityState<IArticle> {
    isLoading?: boolean;
    error?: string;

    view: ArticleView;
}
