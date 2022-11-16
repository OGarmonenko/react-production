import { useTranslation } from 'react-i18next';
import React, { memo, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { Button, ButtonVariant } from '@/shared/ui/Button/Button';
import { LoginModal } from '@/features/AuthByUsername';
import { getUserAuthData, userActions } from '@/entities/User';
import { TextTheme, Text } from '@/shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from '@/shared/ui/Applink/AppLink';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';

interface INavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: INavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onOpenModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <header className={classNames(cls.navbar, {}, [className])}>
                <Text
                    className={cls.appName}
                    title={t('Advanced React')}
                    theme={TextTheme.PRIMARY}
                />
                <AppLink
                    to={RoutePath.article_create}
                    theme={AppLinkTheme.INVERTABLE}
                    className={cls.createBtn}
                >
                    {t('Create article')}
                </AppLink>
                <Button
                    theme={ButtonVariant.CLEAR_INVERTED}
                    className={classNames(cls.links)}
                    onClick={onLogout}
                >
                    {t('Sign out')}
                </Button>
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
