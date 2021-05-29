import React from "react";

export interface IAppState {
    token: string | null;
    firstname: string;
    lastName: string;
    setAuthInfo: (token: string | null, firstname: string, lastName: string) => void;
}

export const initialAppState : IAppState = {
    token: null,
    firstname: '',
    lastName: '',
    setAuthInfo: (): void => {}
}

export const AppContext = React.createContext<IAppState>(initialAppState);
export const AppContextConsumer = AppContext.Consumer;
export const AppContextProvider = AppContext.Provider