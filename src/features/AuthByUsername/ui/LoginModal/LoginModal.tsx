import { Component, ReactNode, Suspense } from 'react';
import { Modal } from '@/shared/ui/Modal/Modal';
import { LoginFormLazy } from '../LoginForm/LoginForm.lazy';
import { Loader } from '@/shared/ui/Loader';
import { classNames } from '@/shared/lib/classNames/classNames';

interface ILoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: ()=> void;
}

export const LoginModal = ({ className, isOpen, onClose }: ILoginModalProps) => (
    <Modal
        className={classNames('', {}, [className])}
        isOpen={isOpen}
        onClose={onClose}
        lazy
    >
        <Suspense fallback={<Loader />}>
            <LoginFormLazy onSuccess={onClose} />
        </Suspense>

    </Modal>

);
