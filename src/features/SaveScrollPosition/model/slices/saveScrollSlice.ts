import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISaveScrollSchema } from '../types/ISaveScrollSchema';

const initialState: ISaveScrollSchema = {
    scroll: {},
};

export const saveScrollSlice = createSlice({
    name: 'scrollPosition',
    initialState,
    reducers: {
        setScrollPosition: (state, action : PayloadAction<{ path: string; position: number }>) => {
            state.scroll[action.payload.path] = action.payload.position;
        },
    },
});

// Action creators are generated for each case reducer function
export const { actions: scrollPositionActions } = saveScrollSlice;
export const { reducer: scrollPositionReducer } = saveScrollSlice;
