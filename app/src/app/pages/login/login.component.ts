import { Component, OnInit } from '@angular/core';
import { TemplateModule } from '../../shared/template/template.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [TemplateModule],
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('',Validators.required)
  });
  constructor() {}

  ngOnInit() {}

  control(name:string){
    return this.form.get(name) as FormControl
  }
}
