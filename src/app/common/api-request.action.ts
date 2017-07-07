interface ApiRequestAction {
    type: string | Symbol;
    payload: any;
    error: boolean;
    meta: any;
}