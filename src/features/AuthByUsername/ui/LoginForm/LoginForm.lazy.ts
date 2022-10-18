import { FC, lazy } from 'react';
import type { ILoginFormProps } from './LoginForm';

export const LoginFormLazy = lazy<FC<ILoginFormProps>>(() => import('./LoginForm'));
