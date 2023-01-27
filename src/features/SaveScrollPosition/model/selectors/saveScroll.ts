import { createSelector } from '@reduxjs/toolkit';

import { IStateSchema } from '@/app/providers/StoreProvider';

export const getScrollPosition = (state: IStateSchema) => state.scrollPosition.scroll;

export const getScrollPositionByPath = createSelector(
    getScrollPosition,
    (state: IStateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0,
);
