import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MoviesComponent} from "./movies/movies.component";
import {AppComponent} from "./app.component";
import {MovieComponent} from "./movies/movie/movie.component";
import {HomeComponent} from "./home/home.component";
import {EditComponent} from "./movies/edit/edit.component";
import {AddComponent} from "./add/add.component";

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'videogames', component: MoviesComponent,children:[

      {path:'edit/:id',component:EditComponent},
    ]
  },
  {path:'movie/:id',component:MovieComponent},
  {path:'edit/:id',component:EditComponent},
  {path:"add", component: AddComponent},

  {path: '**', redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
