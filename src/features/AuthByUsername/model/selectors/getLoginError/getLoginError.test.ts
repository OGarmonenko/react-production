import { getLoginError } from './getLoginError';

import { IStateSchema } from '@/app/providers/StoreProvider';

describe('getLoginError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<IStateSchema> = {
            loginForm: {
                error: 'error',
            },
        };
        expect(getLoginError(state as IStateSchema)).toEqual('error');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(getLoginError(state as IStateSchema)).toEqual(undefined);
    });
});
