import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {

    loginAddForm: FormGroup;
    
    constructor(private formBuilder: FormBuilder, 
        private authService: AuthService,
        private router: Router) { }
        
  ngOnInit() {
    this.loginAddForm = this.formBuilder.group({
        fullname: ['', [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(150)
            ]
        ],
        email: ['', 
            [
                Validators.required,
                Validators.email
            ]
        ],
        username: ['', [
                Validators.required,
                Validators.pattern(/^[a-z0-9_\-]+$/),
                Validators.min(4),
                Validators.maxLength(20)
            ]
        ],
        password: ['', 
            [
                Validators.required,
                Validators.min(8),
                Validators.maxLength(24)
            ]
        ]
    });
  }

  addLogin() {
    const newUser = this.loginAddForm.getRawValue() as User;

    this.authService
        .criaLogin(newUser)
        .subscribe(
            () => this.router.navigateByUrl('form'),
            error => {
                console.log(error);
                this.loginAddForm.reset(); // apaga o formulário
            }
        );
}

}
