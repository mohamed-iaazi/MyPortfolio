import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component'; // Import the NavbarComponent
import{FooterComponent} from './footer/footer.component';
import { HomeComponent} from './home/home.component';
 
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent,FooterComponent,HomeComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio test';
}
