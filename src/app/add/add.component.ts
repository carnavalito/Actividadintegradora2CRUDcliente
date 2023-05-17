import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PostService} from "../post.service";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  addForm: FormGroup;

  constructor(private postService: PostService,private router:Router) {
  }

  ngOnInit() {

    this.addForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'synopsis': new FormControl(null, Validators.required),
      'year': new FormControl(null, Validators.required),
      'cover': new FormControl(null, Validators.required)

    })
  }

  onSubmit() {
    this.postService.addMovie(this.addForm.value).subscribe(responseData => {
        console.log(responseData)
      }
    );

    this.postService.movieChanged.next(this.postService.fetchPosts().subscribe());
    this.router.navigateByUrl("/movie");
    alert('pelicula agregada con exito');


  }

}
