import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TemplateModule } from '../../shared/template/template.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports : [TemplateModule],
  standalone : true,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  name = ""
  auth = inject(AuthService)
  constructor() { }

  ngOnInit() {
    this.auth.getDataUser().subscribe(user=>
      this.name = user.name ?? sessionStorage.getItem('name')
    )
  }

 

}
