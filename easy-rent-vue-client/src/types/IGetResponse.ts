export interface IGetResponse<TData>{
    statusCode:number;
    errorMessage?: string;
    data?: TData;
}