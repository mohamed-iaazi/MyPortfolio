import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component'; // Import the NavbarComponent
import {FooterComponent} from './footer/footer.component';
import { HomeComponent} from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjetsComponent } from './projets/projets.component';
 
@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterLinkActive,RouterOutlet,NavbarComponent,FooterComponent,HomeComponent,AboutComponent,ContactComponent,ProjetsComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio test';
}
