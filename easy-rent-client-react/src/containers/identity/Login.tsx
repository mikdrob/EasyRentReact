const Login = () => {
    return (
        <form id="account" method="post">
            <h4>Use a local account to log in</h4>
            <hr />
            <div className="text-danger validation-summary-valid" data-valmsg-summary="true"><ul>
            </ul></div>
            <div className="form-group">
                <label htmlFor="Input_Email">Email</label>
                <input className="form-control" type="email" data-val="true" data-val-email="The Email field is not a valid e-mail address." data-val-required="The Email field is required." id="Input_Email" name="Input.Email" value="" />
                <span className="text-danger field-validation-valid" data-valmsg-htmlFor="Input.Email" data-valmsg-replace="true"></span>
            </div>
            <div className="form-group">
                <label htmlFor="Input_Password">Password</label>
                <input className="form-control" type="password" data-val="true" data-val-required="The Password field is required." id="Input_Password" name="Input.Password" />
                <span className="text-danger field-validation-valid" data-valmsg-htmlFor="Input.Password" data-valmsg-replace="true"></span>
            </div>
            <div className="form-group">
                <div className="checkbox">
                    <label htmlFor="Input_RememberMe">
                        <input type="checkbox" data-val="true" data-val-required="The Remember me? field is required." id="Input_RememberMe" name="Input.RememberMe" value="true" />
                    Remember me?
                </label>
                </div>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">Log in</button>
            </div>
        </form>
    );
}

export default Login;