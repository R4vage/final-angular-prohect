import { createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as SavedItemActions from './saved-item.actions';

export type Kind = 'album' | 'track' | 'artist' | 'playlist';

export interface SavedItem {
  id: string;
  kind: Kind;
  isSaved: boolean;
}

export const savedItemsFeatureKey = 'savedItems';

export interface SavedState extends EntityState<SavedItem> {}

export const adapter: EntityAdapter<SavedItem> =
  createEntityAdapter<SavedItem>();

export const initialState: SavedState = adapter.getInitialState({});

export const reducer = createReducer(
  initialState,

  on(SavedItemActions.checkSavedItems, (state) => state),

  on(SavedItemActions.addSavedItem, (state, action) => state),
  on(SavedItemActions.addSavedItemSuccess, (state, action) =>
    adapter.addOne(action.savedItem, state)
  ),

  on(SavedItemActions.addSavedItems, (state, action) => state),
  on(SavedItemActions.addSavedItemsSuccess, (state, action) =>
    adapter.addMany(action.savedItems, state)
  ),

  on(SavedItemActions.updateSavedItem, (state, action) => state),
  on(SavedItemActions.updateSavedItemSuccess, (state, action) =>
    adapter.updateOne(action.savedItem, state)
  ),

  on(
    (SavedItemActions.addSavedItemFailure,
    SavedItemActions.addSavedItemsFailure,
    SavedItemActions.addSavedItemFailure),
    (state, action) => {
      throw new Error(action.error);
    }
  ),

  on(SavedItemActions.upsertSavedItem, (state, action) =>
    adapter.upsertOne(action.savedItem, state)
  ),
  on(SavedItemActions.upsertSavedItems, (state, action) =>
    adapter.upsertMany(action.savedItems, state)
  ),
  on(SavedItemActions.updateSavedItems, (state, action) =>
    adapter.updateMany(action.savedItems, state)
  )
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
