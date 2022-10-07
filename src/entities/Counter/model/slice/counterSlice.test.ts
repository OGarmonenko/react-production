import { counterReducer, counterActions } from './counterSlice';
import type { ICounterSchema } from '../types/counterSchema';

describe('counterSlice.test', () => {
    const state: ICounterSchema = {
        value: 10,
    };
    test('should incremented value', () => {
        expect(counterReducer(state, counterActions.increment)).toEqual({ value: 11 });
    });
    test('should decremented value', () => {
        expect(counterReducer(state, counterActions.decrement)).toEqual({ value: 9 });
    });
    test('should work with empty state', () => {
        expect(counterReducer(undefined, counterActions.increment)).toEqual({ value: 1 });
    });
});
