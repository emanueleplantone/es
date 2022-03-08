import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'es';
  testo:string = "ciao";
  lista:string[]=[ 'Banane' , 'lamponi' , 'latte' , 'sale'  ]

}
