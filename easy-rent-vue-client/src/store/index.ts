import { createStore } from 'vuex'
import { logIn } from './actions';

export interface IState {
    token: string | null;
    firstname: string;
    lastname: string;
}

export const initialState: IState = {
    token: null,
    firstname: '',
    lastname: '',
}

export interface IJwtResponse {
    token: string;
    firstname: string;
    lastname: string;
}

export interface ILoginInfo {
    email: string;
    password: string;
    url: string;
}

export default createStore({
    state: initialState,
    mutations: {
        logOut: (state: IState) => {
            state.token = null;
            state.firstname = '';
            state.lastname = '';
        },
        logIn: (state: IState, jwtResponse: IJwtResponse) => {
            state.token = jwtResponse.token;
            state.firstname = jwtResponse.firstname;
            state.lastname = jwtResponse.lastname;
        },
    },
    actions: {
        logIn: (context, login: ILoginInfo) => { logIn(context, login) }
    },
    getters: {
    },
    modules: {
    }
})
