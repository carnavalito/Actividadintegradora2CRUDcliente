import {Component, OnInit} from '@angular/core';
import {PostService} from "../../post.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit{


  id:number;
  movie;

  constructor(private postService: PostService, private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        // this.movie = this.postService.fetchPosts2();
        // this.recipe = this.recipes[+params['id']];
        this.postService.fetchPosts().subscribe(data => {

          this.movie = data['data'][this.id]
        });

      }
    )



  }






}
