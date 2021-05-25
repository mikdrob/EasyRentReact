import React from "react";

export interface IAppState {
    jwt: string | null;
    firstName: string;
    lastName: string;
    setAuthInfo: (jwt: string, firstName: string, lastName: string) => void;
}

export const initialAppState : IAppState = {
    jwt: null,
    firstName: 'first',
    lastName: 'last',
    setAuthInfo: (): void => {}
}

export const AppContext = React.createContext<IAppState>(initialAppState);
export const AppContextConsumer = AppContext.Consumer;
export const AppContextProvider = AppContext.Provider