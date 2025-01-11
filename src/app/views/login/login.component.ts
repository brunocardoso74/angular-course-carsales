import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { LoginService } from '../../resources/services/login.service';
import { RequestLogin } from '../../resources/models/RequestLogin';
import { AlertService } from '../../resources/services/alert.service';

@Component({
  selector: 'app-login', 
  standalone: true,
  imports: [
    FormsModule,
    CardModule,
    InputTextModule,
    ButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent implements OnInit{
  public requestLogin!: RequestLogin;
  
  constructor(
    private loginService: LoginService,
    private alertService: AlertService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.requestLogin = new RequestLogin();
  }

  public doLogin() :void {
    //const requestLogin = new RequestLogin('user', 'password');

    console.log(this.requestLogin);
    this.loginService.doLogin(this.requestLogin).subscribe(
      (data) => {
        console.log('Login bem sucedido', data);
        //this.alertService.info('Funcionalidade ainda não implementada');
        
        //this.router.navigate(['/dashboard']);
        this.router.navigate(['/home']);
      },
      (httpError) => {
        this.alertService.error('Erro ao tentar efetuar o login', httpError.error.message);
        console.error('Erro ao tentar efetuar o login', httpError.error);
      }
    );
  }
}
