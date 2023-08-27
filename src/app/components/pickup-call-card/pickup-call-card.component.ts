import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pickup-call-card',
  templateUrl: './pickup-call-card.component.html',
  styleUrls: ['./pickup-call-card.component.scss'],
})
export class PickupCallCardComponent  implements OnInit {

  @Input() hasHeader: boolean = true;
  @Input() hasFooter: boolean = true;

  @Input() status: string = ''
  @Input() updateAt: string = ''
  @Input() createdAt: string = ''
  @Input() notes: string = ''

  
  constructor() { }

  ngOnInit() {}

}
