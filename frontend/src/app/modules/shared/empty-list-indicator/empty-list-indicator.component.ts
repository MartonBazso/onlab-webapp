import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty-list-indicator',
  templateUrl: './empty-list-indicator.component.html',
  styleUrls: ['./empty-list-indicator.component.scss']
})
export class EmptyListIndicatorComponent implements OnInit {
  @Input() list: any[];
  constructor() { }

  ngOnInit(): void {
  }

}
