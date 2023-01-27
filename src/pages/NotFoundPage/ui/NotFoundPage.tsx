import { useTranslation } from 'react-i18next';

import cls from './NotFoundPage.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { PageContent } from '@/widgets/PageContent/PageContent';

interface INotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: INotFoundPageProps) => {
    const { t } = useTranslation();
    return (
        <PageContent className={classNames(cls.notFoundPage, {}, [className])}>
            {t('Page not found')}
        </PageContent>
    );
};
