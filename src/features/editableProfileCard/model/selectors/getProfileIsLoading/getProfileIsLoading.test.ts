import { getProfileIsLoading } from './getProfileIsLoading';

import { IStateSchema } from '@/app/providers/StoreProvider';

describe('getProfileIsLoading.test', () => {
    test('should work with filled state', () => {
        const state: DeepPartial<IStateSchema> = {
            profile: {
                isLoading: true,
            },
        };
        expect(getProfileIsLoading(state as IStateSchema)).toEqual(true);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(getProfileIsLoading(state as IStateSchema)).toEqual(undefined);
    });
});
