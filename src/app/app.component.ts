import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  logo: string = "/assets/logo3.jpg"

  flagMenu: boolean = false

  title = 'projetoExoto';

  mostrarMenu(): void{

    this.flagMenu = !this.flagMenu

  }




}


