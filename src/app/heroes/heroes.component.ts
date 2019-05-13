import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero'; // importar la clase hero
import {HEROES} from '../mock-heroes'; // importar la constante del arreglo de heroes
import {HeroService} from '../hero.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';



@Component({// -->decoradores
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[]; // nuevo
  // selectedHero: Hero; // declaramos una variable llamada selectedHero

   /* hero: Hero = {
    id: 1,
    name: 'Windstorm'}; */

  constructor(private heroService: HeroService) { // location es un servicio de angular para interactuar con el navegador
  } // private heroService: HeroService

  ngOnInit() {
  this.getHeroes; // mandamos llamar el metodo getHeroes para extraer los heroes con el servicio

}


/*   onselect(hero: Hero): void {
    this.selectedHero = hero; }
 */

getHeroes(): void { // void
  // this.heroes=this.heroService.getHeroes();

//const id = + this.route.snapshot.paramMap.get('id'); /* el operador + convierte
//los Strings a numeros*/

this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes); // observable
}








}
