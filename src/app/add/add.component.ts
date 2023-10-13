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
      'nombre': new FormControl(null, Validators.required),
      'genero': new FormControl(null, Validators.required),
      'lanzamiento': new FormControl(null, Validators.required)


    })
  }

  onSubmit() {
    // console.log(this.addForm.value);
    this.postService.addVideogame(this.addForm.value).subscribe(responseData => {
       console.log()
        console.log(responseData)
      }
    );
    //
    this.postService.movieChanged.next(this.postService.fetchPosts().subscribe());
    this.router.navigateByUrl("/videogames");
    alert('Videojuego agregado con exito');


  }

}
