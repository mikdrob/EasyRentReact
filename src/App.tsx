import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeIndex from './containers/home/HomeIndex';
import HouseTypeCreate from './containers/house-types/HouseTypeCreate';
import HouseTypeDelete from './containers/house-types/HouseTypeDelete';
import HouseTypeDetails from './containers/house-types/HouseTypeDetails';
import HouseTypeEdit from './containers/house-types/HouseTypeEdit';
import HouseTypeIndex from './containers/house-types/HouseTypeIndex';
import HouseDetails from './containers/houses/HouseDetails';
import HouseIndex from './containers/houses/HouseIndex';
import HouseCreate from './containers/houses/HouseCreate';
import Login from './containers/identity/Login';
import Page404 from './containers/Page404';
import { AppContextProvider, IAppState, initialAppState } from './context/AppContext';

function App() {
    
    const setAuthInfo = (token: string | null, firstname: string, lastname: string): void => {
        setAppState({...appState, token, firstname, lastname});
    }

    const [appState, setAppState] = useState({...initialAppState, setAuthInfo});


    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser){
            const foundUser = JSON.parse(loggedInUser) as IAppState;
            appState.setAuthInfo(foundUser.token, foundUser.firstname, foundUser.lastname);
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [] );

    return (
        <>
        <AppContextProvider value={appState}>
            <Header />
            <div className="container">
                <main role="main" className="pb-3">
                    <Switch>
                        <Route exact path="/" component={HomeIndex} />
                        <Route path="/identity/login" component={Login} />
                        <Route path="/housetypes/create" component={HouseTypeCreate} />
                        <Route path="/housetypes/details/:id" component={HouseTypeDetails} />
                        <Route path="/housetypes/edit/:id" component={HouseTypeEdit} />
                        <Route path="/housetypes/delete/:id" component={HouseTypeDelete} />
                        <Route path="/housetypes" component={HouseTypeIndex} />
                        <Route path="/houses/create" component={HouseCreate} />
                        <Route path="/houses/details/:id" component={HouseDetails} />
                        <Route path="/houses" component={HouseIndex} />

                        <Route component={Page404} />
                    </Switch>
                </main>
            </div>
            <Footer />
        </AppContextProvider>
        </>
    );
}

export default App;
