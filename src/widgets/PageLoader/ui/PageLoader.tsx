import cls from './PageLoader.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/Loader';

interface IPageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: IPageLoaderProps) => (
    <div className={classNames(cls.pageLoader, {}, [className])}>
        <Loader />
    </div>
);
