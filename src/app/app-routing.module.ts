import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {HeroesComponent} from '../app/heroes/heroes.component';
import {DashboardComponent} from '../app/dashboard/dashboard.component';
import {HeroDetailComponent} from '../app/hero-detail/hero-detail.component' ;




/* { path: '', redirectTo: '/dashboard', pathMatch: 'full' } --> indicamos que por default
carge la pagina con el componente asignado */

/*{path: 'detail/:id' , component: HeroDetailComponent } --> detail/:id especifica que la ruta debe llevar un 
de entrada en este caso un id entero */
const routes: Routes = [
{path: '', redirectTo: '/dashboard', pathMatch: 'full'},
{path: 'heroes', component: HeroesComponent},
{path: 'dashboard', component: DashboardComponent },
{path: 'detail/:id' , component: HeroDetailComponent }]; // indicamos la URL y el componente que debe cargar la pagina


@NgModule({
imports : [RouterModule.forRoot( routes )],
exports: [RouterModule]
})



export class AppRoutingModule { }
