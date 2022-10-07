import { DeepPartial } from '@reduxjs/toolkit';
import { getCounterValue } from './getCounterValue';
import type { IStateSchema } from '@/app/providers/StoreProvider';

describe('getCounterValue.test', () => {
    test('should return counter value', () => {
        const state: DeepPartial<IStateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounterValue(state as IStateSchema)).toEqual(10);
    });
});
