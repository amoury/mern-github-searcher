import {
  Status,
  UpdateStatusAction,
  StatusActionTypes,
  DismissErrorAction,
} from 'types/status.types';

export const updateStatus = (status: Status): UpdateStatusAction => ({
  type: StatusActionTypes.UPDATE_STATUS,
  payload: status,
});

export const dismissError = (): DismissErrorAction => ({
  type: StatusActionTypes.DISMISS_ERROR,
});
