import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Posts } from '../../models/posts'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any = [];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
     this.getPostsList();
  }

  getPostsList() {
    this.postsService.getPosts()
    .subscribe(
      res => {
        console.log(res);
        this.posts = res;
      },
      err => console.error(err)
    );   
  } 

}
