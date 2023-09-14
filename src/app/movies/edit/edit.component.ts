import {Component, OnInit} from '@angular/core';
import {PostService} from "../../post.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Form, FormControl, FormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number;
  movieId: number;
  movie;
  editForm: FormGroup;

  constructor(private postService: PostService, private route: ActivatedRoute, private location: Location) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {

        this.id = +params['id'];
        this.postService.getMovie(this.id).subscribe(data => {

          this.movie = data['data'];
          console.log(this.movie)
          // this.movieId=this.movie.id;
          // console.log(this.movieId);
          this.initForm(this.movie);


        });

        // this.postService.fetchPosts().subscribe(data => {
        //
        //   this.movie = data['data'];
        //   console.log(this.movie)
        //   // this.movieId=this.movie.id;
        //   // console.log(this.movieId);
        //   // this.initForm(this.movie);
        //
        //
        // });


      }
    )


  }

  private initForm(movie) {


    this.editForm = new FormGroup({
      'title': new FormControl(movie.title, Validators.required),
      'synopsis': new FormControl(movie.synopsis, Validators.required),
      'year': new FormControl(movie.year, Validators.required),
      'cover': new FormControl(movie.cover, Validators.required)

    })


  }


  onSubmit() {
    console.log(JSON.stringify(this.editForm.value));

    this.postService.editMovie(this.editForm.value, this.movie.id);
    this.location.back();
    alert('Pelicula editada con exito');
  }

  goBack(){
    this.location.back();
  }


}
