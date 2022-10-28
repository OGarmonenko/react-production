import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getProfileData } from '@/entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileIsLoading } from '@/entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '@/entities/Profile/model/selectors/getProfileError/getProfileError';
import { Text } from '@/shared/ui/Text/Text';
import { Button, ButtonVariant } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    return (
        <div className={classNames(cls.profileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Profile page')} />
                <Button
                    className={cls.editBtn}
                    theme={ButtonVariant.OUTLINE}
                >
                    {t('Edit')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input
                    value={data?.first}
                    placeholder={t('Name')}
                    className={cls.input}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Lastname')}
                    className={cls.input}
                />
            </div>
        </div>
    );
};
