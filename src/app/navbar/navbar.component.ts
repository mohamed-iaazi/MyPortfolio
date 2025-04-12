import { Component } from '@angular/core';
import { RouterLink ,RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  

  scrollTo(element:string) {

  const t = document.getElementById(element);
   t?.scrollIntoView({
     behavior: 'smooth', 
     block: 'start',
     inline: 'nearest'
     
    });
    
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  } 

  
}
