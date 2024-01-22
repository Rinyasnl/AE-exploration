// actions.ts
export enum ActionTypes {
    FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST',
    FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS',
    FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE',
  }
  
  interface FetchDataRequestAction {
    type: ActionTypes.FETCH_DATA_REQUEST;
  }
  
  interface FetchDataSuccessAction {
    type: ActionTypes.FETCH_DATA_SUCCESS;
    payload: DataItem[];
  }
  
  interface FetchDataFailureAction {
    type: ActionTypes.FETCH_DATA_FAILURE;
    payload: string; // Error message
  }
  
  export type DataAction =
    | FetchDataRequestAction
    | FetchDataSuccessAction
    | FetchDataFailureAction;
  
  export const fetchDataRequest = (): FetchDataRequestAction => ({
    type: ActionTypes.FETCH_DATA_REQUEST,
  });
  
  export const fetchDataSuccess = (data: DataItem[]): FetchDataSuccessAction => ({
    type: ActionTypes.FETCH_DATA_SUCCESS,
    payload: data,
  });
  
  export const fetchDataFailure = (error: string): FetchDataFailureAction => ({
    type: ActionTypes.FETCH_DATA_FAILURE,
    payload: error,
  });
  