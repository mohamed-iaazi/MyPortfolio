import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component'; // Import the NavbarComponent
import {FooterComponent} from './footer/footer.component';
 
@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterLinkActive,RouterOutlet,NavbarComponent,FooterComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio test';
}
