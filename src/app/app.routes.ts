import { Routes } from '@angular/router';
import { ContactoComponent } from './page/contacto/contacto.component';
import { ProyectosComponent } from './page/proyectos/proyectos.component';
import { HomeComponent } from './page/home/home.component';
export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,

    },
    {
        path: "contacto",
        component: ContactoComponent
    },
    {
        path: "proyectos",
        component: ProyectosComponent
    }



];
