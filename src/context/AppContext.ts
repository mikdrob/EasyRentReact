import React from "react";

export interface IAppState {
    token: string | null;
    firstname: string;
    lastname: string;
    setAuthInfo: (token: string | null, firstname: string, lastname: string) => void;
}

export const initialAppState : IAppState = {
    token: null,
    firstname: 'Guest',
    lastname: '',
    setAuthInfo: (): void => {}
}

export const AppContext = React.createContext<IAppState>(initialAppState);
export const AppContextConsumer = AppContext.Consumer;
export const AppContextProvider = AppContext.Provider