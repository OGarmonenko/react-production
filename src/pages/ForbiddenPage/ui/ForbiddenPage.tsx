import React from 'react';
import { useTranslation } from 'react-i18next';

import { PageContent } from '@/widgets/PageContent/PageContent';

const ForbiddenPage = () => {
    const { t } = useTranslation();

    return (
        <PageContent>
            {t('You do not have access to this page')}
        </PageContent>
    );
};

export default ForbiddenPage;
