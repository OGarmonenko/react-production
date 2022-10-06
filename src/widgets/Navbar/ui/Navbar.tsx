import { useTranslation } from 'react-i18next';
import React, { useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Button, ButtonVariant } from '@/shared/ui/Button/Button';

interface INavbarProps {
    className?: string;
}

export const Navbar = ({ className }: INavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setisAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setisAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                theme={ButtonVariant.CLEAR_INVERTED}
                className={classNames(cls.links)}
                onClick={onToggleModal}
            >
                {t('Sign in')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                {/* eslint-disable-next-line */}
                {t('Lorem20')}
            </Modal>
        </div>
    );
};
