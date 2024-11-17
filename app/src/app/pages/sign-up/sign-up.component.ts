import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TemplateModule } from '../../shared/template/template.module';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  imports : [TemplateModule],
  standalone : true,
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('',Validators.required),
    document : new FormControl('',Validators.required),
    email : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('',Validators.required),
   // confirmPassword : new FormControl('',Validators.required)
  });
  constructor() {}

  ngOnInit() {}

  control(name:string){
    return this.form.get(name) as FormControl
  }
}
