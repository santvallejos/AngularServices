import { Component,OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [NgFor],
  providers: [PostService],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {
  posts : any[] = [];

  constructor(private postService: PostService){}

  ngOnInit(){
    this.postService.getPost().subscribe((data: any) => {
        this.posts = data;
      });
  }
}
