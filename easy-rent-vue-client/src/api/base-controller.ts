import { IGetResponse } from "@/types/IGetResponse";
import { IQueryParams } from "@/types/IQueryParams";
import axios, { AxiosResponse } from "axios";

export default class BaseController<TEntity> {
    private endPointUrl: string;
    private authHeaders = this.jwt !== undefined ? {
        Authorization: 'Bearer ' + this.jwt
    } : {};

    constructor(endPointUrl: string, private jwt?: string) {
        this.endPointUrl = endPointUrl;
    }

    async getAll(queryParams?: IQueryParams): Promise<IGetResponse<TEntity[]>> {
        if (queryParams !== undefined) {
            // todo
        }

        const url = this.endPointUrl;
        try {
            const response = (await axios.get(url)) as AxiosResponse;
            if (response.status === 200) {
                const data = response.data as TEntity[];
                console.log(data);
                return {
                    statusCode: response.status,
                    data: response.data
                };
            }
            return {
                statusCode: response.status,
                errorMessage: response.statusText
            };
        } catch (reason) {
            return {
                statusCode: 0,
                errorMessage: JSON.stringify(reason)
            };
        }
    }
}
