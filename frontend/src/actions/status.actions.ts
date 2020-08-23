import { Status, UpdateStatusAction, StatusActionTypes } from 'types/status.types';

export const updateStatus = (status: Status): UpdateStatusAction => ({
  type: StatusActionTypes.UPDATE_STATUS,
  payload: status,
});
