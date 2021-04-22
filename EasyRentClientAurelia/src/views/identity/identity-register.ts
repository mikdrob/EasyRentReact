import { HttpClient, IRouter, Router } from "aurelia";
import { AccountService } from "../../services/account-service";
import { AppState } from "../../state/app-state";
import { IJwtResponse } from "../../types/IJwtResponse";

export class IdentityRegister{
    private service: AccountService = 
        new AccountService("https://localhost:5001/api/v1/Account/Register", this.httpClient);


    private email: string;
    private password: string;
    private firstname: string;
    private lastname: string;

    constructor(@IRouter private router: Router, protected httpClient: HttpClient){

    }

    async registerClicked(event: Event){
        event.preventDefault();
        let response = await this.service.register(this.email, this.password, this.firstname, this.lastname);
        
        if(response.statusCode == 200 && response.data){
            await this.router.load('/home-index');
        }



    }
}