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
import Login from './containers/identity/Login';
import Page404 from './containers/Page404';
// import PageForm from './containers/PageForm';
import { AppContextProvider, initialAppState } from './context/AppContext';

function App() {
    const setAuthInfo = (token: string | null, firstname: string, lastName: string): void => {
        setAppState({...appState, token, firstname, lastName});
    }

    useEffect(() => {
        const userToken = localStorage.getItem("jwt");
        const userFirstName = localStorage.getItem("userfirstname");
        const userLastName = localStorage.getItem("userlastname");
        if (userToken && userFirstName && userLastName) {
          appState.setAuthInfo(userToken, userFirstName, userLastName);
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [] );

    const [appState, setAppState] = useState({...initialAppState, setAuthInfo});
    return (
        <>
        <AppContextProvider value={appState}>
            <Header />
            <div className="container">
                <main role="main" className="pb-3">
                    <Switch>
                        <Route exact path="/" component={HomeIndex} />
                        <Route path="/identity/login" component={Login} />
                        {/* <Route path="/form" component={PageForm} /> */}
                        <Route path="/housetypes/create" component={HouseTypeCreate} />
                        <Route path="/housetypes/details/:id" component={HouseTypeDetails} />
                        <Route path="/housetypes/edit/:id" component={HouseTypeEdit} />
                        <Route path="/housetypes/delete/:id" component={HouseTypeDelete} />
                        <Route path="/housetypes" component={HouseTypeIndex} />
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
