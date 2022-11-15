import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSavedItems from './saved-item.reducer';

export const selectSavedItemsState = createFeatureSelector<fromSavedItems.SavedState>('savedItems');

export const selectAllSavedItems = createSelector(selectSavedItemsState, fromSavedItems.selectAll);

export function checkSavedIds (ids: string []) { 
    return createSelector(selectSavedItemsState, (state) => {
        return ids.filter((id)=> {return !(state.ids as string[]).includes(id)})
    })
}
