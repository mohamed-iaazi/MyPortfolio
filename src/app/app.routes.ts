import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProjetsComponent } from './projets/projets.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';



export const routes: Routes = [

    {
        path:"app-navbar",
        component :NavbarComponent
    } ,
    {
        path:"app-footer",
        component :FooterComponent
    },
    {
        path:"app-projets",
        component :ProjetsComponent
    } ,
    {
        path:"app-home",
        component :HomeComponent
    }, 
    {
        path:"app-contact",
        component :ContactComponent
    } ,
    {
        path:"app-about",
        component :AboutComponent

    }
];
