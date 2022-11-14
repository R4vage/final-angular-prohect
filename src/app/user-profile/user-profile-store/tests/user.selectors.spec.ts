import { User } from 'src/app/core/models/user-profile.models';
import * as fromUser from '../reducers/user.reducer';
import { selectUserState } from '../selectors/user.selectors';

describe('User Selectors', () => {
  it('should select the feature state', () => {
    const result = selectUserState({
      [fromUser.userFeatureKey]: {},
    });

    expect(result).toEqual({} as User);
  });
});
