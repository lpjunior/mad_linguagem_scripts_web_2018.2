import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit {

    loginForm: FormGroup;

    constructor(private formBuilder: FormBuilder, 
                private authService: AuthService,
                private router: Router) {}

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    login() {
        //document.getElementById("idLogin").nodeValue()
        const username = this.loginForm.get('username').value;
        const password = this.loginForm.get('password').value;

        this.authService
            .autenticacao(username, password)
            .subscribe(
                (data:any) => {
                    if(data.length > 0){
                        console.log(data)
                        console.log(`O usuário ${data[0].fullname} logou`)
                        // redireciona para a página form
                        this.router.navigateByUrl('form');
                    }
                },
                error => {
                    console.log(error);
                    this.loginForm.reset(); // apaga o formulário
                }
            );
    }
}