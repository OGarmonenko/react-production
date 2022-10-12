import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonVariant } from '@/shared/ui/Button/Button';
import cls from './LoginForm.module.scss';
import { Input } from '@/shared/ui/Input/Input';

interface ILoginFormProps {
    className?: string;

}

export const LoginForm = ({ className }: ILoginFormProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            <Input type="text" className={cls.input} placeholder={t('Login')} />
            <Input type="text" className={cls.input} placeholder={t('Password')} />
            <Button className={cls.loginBtn} theme={ButtonVariant.OUTLINE}>{t('Sign in')}</Button>
        </div>
    );
};
