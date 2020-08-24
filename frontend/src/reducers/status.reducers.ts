import { Status, StatusAction, StatusActionTypes } from 'types/status.types';

const defaultStatus: Status = {
  isFetching: false,
  errors: null,
  success: false,
};

const statusReducer = (state: Status = defaultStatus, action: StatusAction) => {
  switch (action.type) {
    case StatusActionTypes.UPDATE_STATUS:
      return action.payload;
    case StatusActionTypes.DISMISS_ERROR:
      return { ...state, errors: null };
    default:
      return state;
  }
};

export { statusReducer };
