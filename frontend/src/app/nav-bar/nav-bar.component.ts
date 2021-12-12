import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../modules/shared/models/user.interface';
import { UserService } from '../modules/shared/services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  user: User = null;
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.currentUser.subscribe(user => {
      this.user = user;
    });
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  logout() {
    this.userService.logout().subscribe(() => {
      this.userService.clearCurrentUser();
      this.router.navigate(['/login']);
    });
  }
}
