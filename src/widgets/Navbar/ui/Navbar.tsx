import { useTranslation } from 'react-i18next';
import React, { useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { Button, ButtonVariant } from '@/shared/ui/Button/Button';
import { LoginModal } from '@/features/AuthByUserName';

interface INavbarProps {
    className?: string;
}

export const Navbar = ({ className }: INavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setisAuthModal] = useState(false);

    const onCloseModal = useCallback(() => {
        setisAuthModal(false);
    }, []);

    const onOpenModal = useCallback(() => {
        setisAuthModal(true);
    }, []);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                theme={ButtonVariant.CLEAR_INVERTED}
                className={classNames(cls.links)}
                onClick={onOpenModal}
            >
                {t('Sign in')}
            </Button>
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        </div>
    );
};
