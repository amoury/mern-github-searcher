import { Status, StatusAction, StatusActionTypes } from 'types/status.types';

const defaultStatus: Status = {
  isFetching: false,
  error: null,
  success: false,
};

const statusReducer = (state: Status = defaultStatus, action: StatusAction) => {
  switch (action.type) {
    case StatusActionTypes.UPDATE_STATUS:
      return action.payload;
    default:
      return state;
  }
};

export { statusReducer };
