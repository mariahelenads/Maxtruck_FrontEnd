import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Message } from 'primeng/api';

@Component({
  selector: 'input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnInit {
  @Input() label : string = ''
  @Input() icon : string = ''
  @Input() mask : string = ''
  @Input() type : string = 'text'
  @Input() placeholder : string = ''
  @Input() messageError: string = ''
  @Input() control = new FormControl()
  message : Message[]  = [{ severity: 'error', detail: 'Erro de campo dadas', }]
  constructor() { }

  ngOnInit() {
  }
  
  isInvalid(){
    return this.control.invalid && this.control.touched
  }

}
