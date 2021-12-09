import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role, User } from '../models/user.interface';
import { CrudService } from '../services/crud.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.scss']
})
export class DisplayCardComponent implements OnInit {
  public user: User;
  @Input() entity: any;
  @Input() route: string;
  @Input() childRoute: string;
  @Input() service: CrudService;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.currentUser.subscribe(user => {
      this.user = user;
    });
  }
  navigate(id: number) {
    this.router.navigate([this.childRoute, id]);
  }

  isUserEmptyOrNotAdmin() {
    return this.user === null || this.user.role !== Role.Admin;
  }
}
