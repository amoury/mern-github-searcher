export enum StatusActionTypes {
  UPDATE_STATUS = 'UPDATE_STATUS',
  DISMISS_ERROR = 'DISMISS_ERROR',
}

export interface Status {
  isFetching: boolean;
  errors: { message: string }[] | null;
  success: boolean;
}

export interface UpdateStatusAction {
  type: StatusActionTypes.UPDATE_STATUS;
  payload: Status;
}

export interface DismissErrorAction {
  type: StatusActionTypes.DISMISS_ERROR;
}

export type StatusAction = UpdateStatusAction | DismissErrorAction;
