import React from 'react';
import { useTranslation } from 'react-i18next';

import { PageContent } from '@/widgets/PageContent/PageContent';

const AdminPanelPage = () => {
    const { t } = useTranslation('adminPanel');

    return (
        <PageContent>
            {t('Admin panel')}
        </PageContent>
    );
};

export default AdminPanelPage;
