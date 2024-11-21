import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'label-item',
  templateUrl: './label-item.component.html',
  styleUrls: ['./label-item.component.scss']
})
export class LabelItemComponent implements OnInit {
  @Input() title : string = ""
  @Input() label : any
  constructor() { }

  ngOnInit() {
  }

}
