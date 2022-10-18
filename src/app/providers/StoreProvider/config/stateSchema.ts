import type { ICounterSchema } from '@/entities/Counter';
import type { IUserSchema } from '@/entities/User';
import { ILoginSchema } from '@/features/AuthByUsername';

export interface IStateSchema {
    counter: ICounterSchema;
    user: IUserSchema;
    loginForm: ILoginSchema;
}
