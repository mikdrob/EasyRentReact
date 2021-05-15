import React from 'react';
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

function App() {
    return (
        <>
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
                        <Route component={Page404} />
                    </Switch>
                </main>
            </div>
            <Footer />
        </>
    );
}

export default App;
