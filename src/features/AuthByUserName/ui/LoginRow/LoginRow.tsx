import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './LoginRow.module.scss';
import { Input } from '@/shared/ui/Input/Input';

interface ILoginRowProps {
    className?: string;
}

export const LoginRow = ({ className }: ILoginRowProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.loginRow, {}, [className])}>
            <Input />
        </div>
    );
};
