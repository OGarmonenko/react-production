import { createSelector } from '@reduxjs/toolkit';

import { UserRole } from '../consts/consts';

import { IStateSchema } from '@/app/providers/StoreProvider';

export const getUserRoles = (state: IStateSchema) => state.user.authData?.roles;

export const isUserAdmin = createSelector(getUserRoles, (roles) => Boolean(roles?.includes(UserRole.ADMIN)));
export const isUserManager = createSelector(getUserRoles, (roles) => Boolean(roles?.includes(UserRole.MANAGER)));
