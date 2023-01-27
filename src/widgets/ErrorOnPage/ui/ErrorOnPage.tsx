import { useTranslation } from 'react-i18next';

import cls from './ErrorOnPage.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';

interface IErrorOnPageProps {
    className?: string;
}

export const ErrorOnPage = ({ className }: IErrorOnPageProps) => {
    const { t } = useTranslation();

    const refreshPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.errorOnPage, {}, [className])}>
            <p>
                {t('An unexpected error has occurred')}
            </p>
            <Button onClick={refreshPage}>
                {t('Refresh page')}
            </Button>
        </div>
    );
};
