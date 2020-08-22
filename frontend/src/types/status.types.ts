export enum StatusActionTypes {
  UPDATE_STATUS = 'UPDATE_STATUS',
}

export interface Status {
  isFetching: boolean;
  error: string | null;
  success: boolean;
}

export interface UpdateStatusAction {
  type: StatusActionTypes.UPDATE_STATUS;
  payload: Status;
}

export type StatusAction = UpdateStatusAction;
