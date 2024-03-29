import { ValidateProfileError } from '../consts/consts';

import { IProfile } from '@/entities/Profile';

export interface IProfileSchema {
    data?: IProfile;
    form?: IProfile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateErrors?: ValidateProfileError[];
}
