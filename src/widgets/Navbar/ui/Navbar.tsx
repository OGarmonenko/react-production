import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from "@/shared/ui/Applink/AppLink";
import {useTranslation} from "react-i18next";

interface INavbarProps {
    className?: string;
}

export const Navbar = ({className}: INavbarProps) => {
    const {t} = useTranslation();
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={classNames(cls.links)}>
                <AppLink to='/' theme={AppLinkTheme.INVERTABLE}>
                    {t('Link Main page')}
                </AppLink>
                <AppLink to='/about' theme={AppLinkTheme.INVERTABLE}>
                    {t('Link About us')}
                </AppLink>
            </div>
        </div>
    );
};


