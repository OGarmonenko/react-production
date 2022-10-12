import { Modal } from '@/shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

interface ILoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: ()=> void;
}

export const LoginModal = ({ className, isOpen, onClose }: ILoginModalProps) => (
    <Modal isOpen={isOpen} onClose={onClose}>
        <LoginForm />
    </Modal>

);
