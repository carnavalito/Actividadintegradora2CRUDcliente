import {Component, OnInit} from '@angular/core';
import {PostService} from "../../post.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {


  id: number;
  movie;

  constructor(private postService: PostService, private route: ActivatedRoute, private location: Location,private router:Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];

        this.postService.fetchPosts().subscribe(data => {

          this.movie = data['data'][this.id]
          console.log(this.movie);
        });

      }
    )


  }

  deleteMovie() {

    if(window.confirm('Estas Seguro que quieres eliminar la pelicula?')){
      this.postService.deleteVideogame(this.movie.id).subscribe(data => {
        console.log(data);
      })

      this.postService.moviesChanged.next(this.postService.fetchPosts().subscribe());


      this.router.navigate(['/movie'])
    }


  }

  goBack() {
    this.location.back();
  }


}
