import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss'],
  providers: [PostService]
})
export class PostViewComponent implements OnInit {
  @Input() subjectId: number;
  @ViewChild('postInput') textarea: ElementRef;
  posts: any[];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.listPostsBySubjectId(this.subjectId);
    this.postService.entities.subscribe((res) => {
      this.posts = res;
    });
  }

  send(event: any){
    if(event.keyCode == 13){
      this.post();
    }
  }

  post(){
    this.postService.add({subjectId: this.subjectId, content: this.textarea.nativeElement.value}).subscribe((res) => {
      this.textarea.nativeElement.value = '';
      this.postService.listPostsBySubjectId(this.subjectId);
    });
  }

  onDelete(event: any){
    this.postService.listPostsBySubjectId(this.subjectId);
  }
}
