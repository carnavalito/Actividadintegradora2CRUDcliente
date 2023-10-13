import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Movie} from "./movie.model";
import {map, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  movieChanged = new Subject();
  moviesChanged = new Subject();

  movies = [];

  constructor(private http: HttpClient) {

  }


  fetchPosts() {
    return this.http.get('http://localhost:8080/listaVideojuegos');

  }


  getMovie(id: number) {
    return this.http
      .get(`http://localhost:8080/agregarVideojuego`);
  }

  editMovie(editedMovie, id: number) {
    this.http
      .put(
        `http://127.0.0.1:8000/api/movie/${id}`,
        editedMovie
      ).subscribe(responseData => {
      console.log(responseData);
    });
  }

  addVideogame(movie) {
    return this.http
      .post('http://localhost:8080/agregarVideojuego', movie)

  }

  deleteVideogame(body:any) {
    return this.http.delete('http://localhost:8080/borrarVideojuego',body);


  }




}
