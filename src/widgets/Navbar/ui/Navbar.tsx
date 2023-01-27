import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import cls from './Navbar.module.scss';

import { getUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUsername';
import { AvatarDropdown } from '@/features/avatarDropdown';
import { NotificationButton } from '@/features/notificationButton';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonVariant } from '@/shared/ui/Button/Button';
import { HStack } from '@/shared/ui/Stack';
import { Text, TextTheme } from '@/shared/ui/Text/Text';

interface INavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: INavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onOpenModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    if (authData) {
        return (
            <header className={classNames(cls.navbar, {}, [className])}>
                <Text
                    className={cls.appName}
                    title={t('Advanced React')}
                    theme={TextTheme.PRIMARY}
                />
                {/*    <AppLink
                    to={RoutePath.article_create}
                    theme={AppLinkTheme.INVERTABLE}
                    className={cls.createBtn}
                >
                    {t('Create article')}
                </AppLink> */}
                <HStack gap="16" className={cls.actions}>
                    <NotificationButton />
                    <AvatarDropdown />
                </HStack>
            </header>
        );
    }

    return (
        <header className={classNames(cls.navbar, {}, [className])}>
            <Text
                className={cls.appName}
                title={t('Advanced React')}
                theme={TextTheme.PRIMARY}
            />
            <Button
                theme={ButtonVariant.CLEAR_INVERTED}
                className={classNames(cls.links)}
                onClick={onOpenModal}
            >
                {t('Sign in')}
            </Button>
            {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
        </header>
    );
});
