import {Component, OnInit} from '@angular/core';
import {PostService} from "../post.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Subject, Subscription} from "rxjs";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: any = [];
  subscription: Subscription;





  constructor(private postService: PostService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.postService.fetchPosts().subscribe(data => {
      this.movies = data['data'];
    });

    this.subscription = this.postService.movieChanged
      .subscribe(
        (movies) => {
          this.movies = movies;
        }
      )


  }
  // onFetchPosts() {
  //   // Send Http request
  //   this.postService.fetchPosts().subscribe(posts => {
  //
  //     console.log(posts);
  //     this.loadedPosts = posts;
  //   });
  // }


}
