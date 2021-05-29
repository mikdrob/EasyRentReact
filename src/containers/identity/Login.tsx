import React, { useContext, useState } from "react";
import { Redirect } from "react-router";
import Alert, { EAlertClass } from "../../components/Alert";
import CustomLoader from "../../components/CustomLoader";
import { AppContext } from "../../context/AppContext";
import { IdentityService } from "../../services/identity-service";
import { EPageStatus } from "../../types/EPageStatus";

const formState = {
    isActive:true
 }

const Login = () => {


    const [pageStatus, setPageStatus] = useState({ pageStatus: EPageStatus.Ok, statusCode: 0 });

    const appState = useContext(AppContext);

    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [alertMessage, setAlertMessage] = useState('');


    const logInClicked = async (e: Event) => {
        formState.isActive = false;
        e.preventDefault();
        
        setPageStatus({ pageStatus: EPageStatus.Loading, statusCode: -1 });
        if (loginData.email === '' || loginData.password === '') {
            setAlertMessage('Empty email or pawwsord!');
        };
        setAlertMessage('');
        let response = await IdentityService.Login('account/login', loginData);
        if (!response.ok) {
            formState.isActive = true;
            setPageStatus({ pageStatus: EPageStatus.Ok, statusCode: 0 });
            setAlertMessage(response.messages![0]);
        } else {
            setPageStatus({ pageStatus: EPageStatus.Ok, statusCode: 0 });
            setAlertMessage('');
            appState.setAuthInfo(response.data!.token, response.data!.firstname, response.data!.lastname);
            localStorage.setItem("user", JSON.stringify(response.data));
        }
    }

    return (
        <>
            
            {appState.token !== null ? <Redirect to="/" /> : null}
            {formState.isActive ? 
            <form onSubmit={(e) => logInClicked(e.nativeEvent)}>
                <h3>Log in</h3>
                <div className="row">
                    <div className="col-md-6">
                        <section>
                            <hr />
                            <Alert show={alertMessage !== ''} message={alertMessage} alertClass={EAlertClass.Danger} />
                            <div className="form-group">
                                <label htmlFor="Input_Email">Email</label>
                                <input value={loginData.email} onChange={e => setLoginData({ ...loginData, email: e.target.value })} className="form-control" type="email" id="Input_Email" name="Input.Email" placeholder="user@example.com"  autoComplete="username" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Input_Password">Password</label>
                                <input value={loginData.password} onChange={e => setLoginData({ ...loginData, password: e.target.value })} className="form-control" type="password" id="Input_Password" name="Input.Password" placeholder="strong password..." autoComplete="current-password" />
                            </div>
                            <div className="form-group">
                                <button onClick={(e) => logInClicked(e.nativeEvent)} type="submit" className="btn btn-primary">Log in</button>
                            </div>
                        </section>
                    </div>
                </div>
            </form>
            : null}
                <div className="d-flex justify-content-center">
                    <CustomLoader {...pageStatus} />
                </div>
        </>
    );
}

export default Login;
