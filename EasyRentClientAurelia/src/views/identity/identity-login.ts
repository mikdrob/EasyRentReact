import { HttpClient, IRouter, Router } from "aurelia";
import { AccountService } from "../../services/account-service";
import { AppState } from "../../state/app-state";
import { IJwtResponse } from "../../types/IJwtResponse";

export class IdentityLogin{
    private service: AccountService = 
        new AccountService("https://localhost:5001/api/v1/Account/Login", this.httpClient);


    private email: string;
    private password: string;

    constructor(@IRouter private router: Router, private state: AppState, protected httpClient: HttpClient){

    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async loginClicked(event: Event){
        event.preventDefault();
        const response = await this.service.login(this.email, this.password);
        
        if(response.statusCode == 200 && response.data){
            this.state.token = (response.data as IJwtResponse).token;
            this.state.firstname = (response.data as IJwtResponse).firstname;
            this.state.lastname = (response.data as IJwtResponse).lastname;
            await this.router.load('/home-index');
        }



    }


}