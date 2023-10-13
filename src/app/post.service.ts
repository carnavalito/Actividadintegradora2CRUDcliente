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


  getVideogame(id: number) {
    return this.http.get(`http://localhost:8080/videojuego/${id}`,);
  }

  editVideogame(editedVideogame, id: number) {
    return this.http
      .put(
        `http://localhost:8080/actualizarVideojuego/${id}`,
        editedVideogame
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
