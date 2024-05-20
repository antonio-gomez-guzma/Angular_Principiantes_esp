import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root', // El selector es la forma en la que llamamos a este componente si lo queremos utilizar en algún otro sitio
  standalone: true, // Puedes importar las cosas con la siguiente linea de imports, sino necesitarías otro archivo
  imports: [RouterOutlet, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-17-app';
  city = 'Barcelona';
}
