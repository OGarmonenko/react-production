import {Link} from "react-router-dom";
import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';

interface INavbarProps {
    className?: string;
}

export const Navbar = ({className}: INavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={classNames(cls.links)}>
                <Link to='/'>Main</Link>
                <Link to='/about'>About</Link>
            </div>

        </div>
    );
};


