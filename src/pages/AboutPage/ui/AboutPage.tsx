import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { PageContent } from '@/widgets/PageContent/PageContent';

const AboutPage = memo(() => {
    const { t } = useTranslation('about');

    return (
        <PageContent>
            {t('About us')}
        </PageContent>
    );
});

export default AboutPage;
