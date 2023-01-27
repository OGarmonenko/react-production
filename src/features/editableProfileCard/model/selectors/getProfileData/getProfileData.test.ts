import { getProfileData } from './getProfileData';

import { IStateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

describe('getProfileData.test', () => {
    test('should return error', () => {
        const data = {
            username: 'admin',
            age: 40,
            country: Country.Belarus,
            lastname: 'Garmonenko',
            first: 'Olga',
            city: 'Grodno',
            currency: Currency.USD,
        };
        const state: DeepPartial<IStateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as IStateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(getProfileData(state as IStateSchema)).toEqual(undefined);
    });
});
