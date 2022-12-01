import { IProfile } from '@/entities/Profile';
import { ValidateProfileError } from '../consts/consts';

export interface IProfileSchema {
    data?: IProfile;
    form?: IProfile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateErrors?: ValidateProfileError[];
}
