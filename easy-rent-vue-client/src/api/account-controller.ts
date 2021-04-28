import { ILoginInfo } from "@/store";
import axios, { AxiosResponse } from "axios";

export default class AccountController {
    private url: string;
    constructor(endPointUrl: string) {
        this.url = endPointUrl;
    }

    async logIn(login: ILoginInfo): Promise<AxiosResponse> {
        const loginDataStr = JSON.stringify(login);
        const response = await axios.post(
            this.url,
            loginDataStr,
            { headers: { 'Content-type': 'application/json' } }
        );
        return response;
    }
}
