import { Component, ReactNode, Suspense } from 'react';
import { Modal } from '@/shared/ui/Modal/Modal';
import { LoginFormLazy } from '../LoginForm/LoginForm.lazy';
import { Loader } from '@/shared/ui/Loader';

interface ILoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: ()=> void;
}

export const LoginModal = ({ className, isOpen, onClose }: ILoginModalProps) => (
    <Modal isOpen={isOpen} onClose={onClose} lazy>
        <Suspense fallback={<Loader />}>
            <LoginFormLazy />
        </Suspense>

    </Modal>

);
