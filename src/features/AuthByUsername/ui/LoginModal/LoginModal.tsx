import { Suspense } from 'react';

import { LoginFormLazy } from '../LoginForm/LoginForm.lazy';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/Loader';
import { Modal } from '@/shared/ui/Modal/Modal';

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
