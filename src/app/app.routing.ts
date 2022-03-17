// Importar módulos del router de Angular

import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';


// Importar componentes
import { HomeComponent } from "./home/home.component";
import { ZapatillasComponent } from "./zapatillas/zapatillas.component";
import { VideojuegoComponent } from "./videojuego/videojuego.component";
import { CursoComponent } from "./curso/curso.component";
import { ContactoComponent } from './contacto/contacto.component';
import { ExternoComponent } from "./externo/externo.component";


// Array de configuración de las rutas

const appRoutes: Routes = [
    // Introduciremos objetos JSON    
    {path:'', component:HomeComponent},
    {path:'zapatillas',component:ZapatillasComponent},
    {path:'videoJuego',component:VideojuegoComponent},
    {path:'cursos',component:CursoComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'externo',component: ExternoComponent},
    {path: '**', component:HomeComponent}    

];

// Exportar el módulo del router
export const appRoutingProviders:any[] = [];
export const routing = RouterModule.forRoot(appRoutes);