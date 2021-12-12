import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Role } from 'src/app/modules/shared/models/user.interface';
import { UserService } from 'src/app/modules/shared/services/user.service';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
  providers: [PostService]
})
export class PostCardComponent implements OnInit {
  @Input() post: any;
  @Output() onDeletePost = new EventEmitter<any>();
  private currentUser;
  constructor(private postService: PostService, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.currentUser.subscribe((user) => {
      this.currentUser = user;
    });
  }

  onDelete() {
    this.postService.delete(this.post.id).subscribe(
      (res) => {
        this.onDeletePost.emit(this.post.id);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  canDelete() {
    const isAdmin = this.currentUser.role === Role.Admin;
    const isModerator = this.currentUser.role === Role.Moderator;
    const isAuthor = this.currentUser.id === this.post.postedBy.id;
    return this.currentUser != null && (isAdmin || isModerator || isAuthor);
  }
}
