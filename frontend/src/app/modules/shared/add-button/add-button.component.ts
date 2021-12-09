import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role, User } from '../models/user.interface';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss']
})
export class AddButtonComponent implements OnInit {
  public user: User;
  @Input() route: string;
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.currentUser.subscribe(user => this.user = user);
  }

  create() {
    this.router.navigate([this.route + "/create"]);
  }

  isUserEmptyOrNotAdmin() {
    return this.user === null || this.user.role !== Role.Admin;
  }
}
