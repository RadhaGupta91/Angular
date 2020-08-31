import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector:'app-auth',
    templateUrl:'./auth.component.html'
})

export class AuthComponent{
    isLoginMode = true;
    isLoading = false;
    error = null;
    constructor(private authService:AuthService,private router:Router)
    {

    }
    onSwitchMode()
    {
        this.isLoginMode = !this.isLoginMode; 
    }

    onSubmit(form:NgForm)
    {   
        if(!form.valid)
        {
            return ;
        }
        
        this.isLoading =  true;
        const email = form.value.email;
        const password = form.value.password;
            
        let authObs = new Observable<AuthResponseData>();
        if(this.isLoginMode)
        {   
            authObs = this.authService.signin(email,password);
        }else{
            authObs = this.authService.signup(email,password);
        }

        authObs.subscribe(response=>{
            console.log(response);
            this.isLoading =  false;
            this.router.navigate(['/recipes']);
        },
        errorMessage =>{
            console.log(errorMessage);
            this.error = errorMessage;
            this.isLoading =  false;
        }
    )
        form.reset();
    }

    onHandleError()
    {
        console.log('dismiss');
        this.error = null;
    }
}