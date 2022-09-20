import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from "@/shared/ui/Applink/AppLink";

interface INavbarProps {
    className?: string;
}

export const Navbar = ({className}: INavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={classNames(cls.links)}>
                <AppLink to='/' theme={AppLinkTheme.INVERTABLE}>
                    Main
                </AppLink>
                <AppLink to='/about' theme={AppLinkTheme.INVERTABLE}>
                    About
                </AppLink>
            </div>

        </div>
    );
};


