import { Component, OnInit } from '@angular/core';
import { TemplateModule } from '../../shared/template/template.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterEnum } from '../../app.routes';
import { AuthService } from '../../services/auth.service';
import { AuthUser } from '../../models/auth-user.model';
import { MessageService } from 'primeng/api';
import { catchError, delay, distinct, distinctUntilChanged, finalize, tap } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [TemplateModule],
  providers: [AuthService, MessageService],
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });
  loading: boolean = false;
  constructor(
    private route: Router,
    private service: AuthService,
    private messageService: MessageService
  ) {}

  ngOnInit() {}

  control(name: string) {
    return this.form.get(name) as FormControl;
  }
  navigatgeSigUp() {
    this.route.navigate([RouterEnum.SIGUP]);
  }
  login() {
   
    if (this.form.invalid) return;
    if(this.loading) return
    this.loading = true
    this.service
      .authentiction(this.form.getRawValue() as AuthUser)
      .pipe(
        tap(() => this.route.navigate([RouterEnum.PAINEL])),
        catchError((error) => {
         console.log(error)
          this.messageService.add({
            severity: 'error',
            summary: 'Falha na autenticação ',
            detail: 'Login ou senha invalida',
          });
          return error;
        }),
        finalize(()=>this.loading = false)
      )
      .subscribe();
  }
}
