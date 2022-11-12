import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PageLoader } from '@/widgets/PageLoader/ui/PageLoader';
import { PageContent } from '@/shared/ui/PageContent/PageContent';

const MainPage = memo(() => {
    const { t } = useTranslation('main');

    return (
        <PageContent>
            {t('Main page')}
        </PageContent>
    );
});

export default MainPage;
