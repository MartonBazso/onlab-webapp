import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.scss']
})
export class EditButtonComponent implements OnInit {
  @Input() id: number;
  @Input() route: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  edit() {
    this.router.navigate([this.route + "/edit", this.id]);
  }
}
