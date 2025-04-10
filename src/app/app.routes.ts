import { Routes } from '@angular/router';
import { ProjetsComponent } from './projets/projets.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';



export const routes: Routes = [

    
    {
        path:"projets",
        component :ProjetsComponent
    } ,
    {
        path:"",
        component :HomeComponent
    }, 
    {
        path:"contact",
        component :ContactComponent
    } ,
    {
        path:"about",
        component :AboutComponent

    }
];
