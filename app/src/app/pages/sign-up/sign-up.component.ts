import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TemplateModule } from '../../shared/template/template.module';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';
import { RouterEnum } from '../../app.routes';
import { catchError, tap } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  standalone : true,
  styleUrls: ['./sign-up.component.scss'],
  imports : [TemplateModule],
  providers: [AuthService, MessageService],
})
export class SignUpComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('',Validators.required),
    document : new FormControl('',Validators.required),
    email : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('',Validators.required),
   // confirmPassword : new FormControl('',Validators.required)
  });
  constructor(
    private route: Router,
    private service: AuthService,
    private messageService: MessageService
  ) {}

  ngOnInit() {}

  control(name:string){
    return this.form.get(name) as FormControl
  }

  createUser()
  {
    if (this.form.invalid) return;

    this.service.singUp(this.form.getRawValue() as User)
    .pipe(
      tap(() =>{
        this.messageService.add({
          severity: 'success',
          summary: 'Usuário cadastrado com sucesso',
          detail: 'O caminhão foi cadastrado corretamente.',
        });
        setTimeout(() => {
          this.route.navigate([RouterEnum.SIGNIN]);
        }, 1500);
      }),
    catchError((error) => {
      console.log(error)
          this.messageService.add({
            severity: 'error',
            summary: 'Falha ao Cadastrar Usuário',
            detail: 'Não foi possivel realizar o cadastro',
          });
          return error;
    })
  ).subscribe();

     
  }
}


