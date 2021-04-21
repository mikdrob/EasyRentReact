import { IRouter, Router } from "aurelia";
import { AppState } from "./state/app-state";

export class MyApp {
    constructor(@IRouter private router: Router, private state: AppState){
        
    }

    attached(){
       // console.log("dsafas");
    }

    async logOut(event: Event){
        this.state.token = null;
        this.state.firstname = null;
        this.state.lastname = null;   
        await this.router.load('/identity-login');
    }
}
