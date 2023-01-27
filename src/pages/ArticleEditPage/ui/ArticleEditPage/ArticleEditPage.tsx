import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import cls from './ArticleEditPage.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { PageContent } from '@/widgets/PageContent/PageContent';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article-details');
    const { id } = useParams<{id: string}>();
    const isEdit = Boolean(id);

    return (
        <PageContent className={classNames(cls.articleEditPage, {}, [className])}>
            {isEdit
                ? t('Editing article')
                : t('Creation new article')}
        </PageContent>
    );
});

export default ArticleEditPage;
