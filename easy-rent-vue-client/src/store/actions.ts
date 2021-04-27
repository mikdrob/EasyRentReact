import axios from "axios";
import { ILoginInfo } from ".";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function logIn(context: any, login: ILoginInfo): Promise<void> {
    const loginDataStr = JSON.stringify(login);
    const response = await axios.post(
        login.url,
        loginDataStr,
        { headers: { 'Content-type': 'application/json' } }
    );
    if (response.status === 200) {
        context.commit('logIn', response.data);
    }
}
