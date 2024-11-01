import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path:'',
        redirectTo:'unoeste-inicio',
        pathMatch:'full'
    },
    {
        path:'unoeste-inicio',
        loadComponent:() => import('./pages/inicio/inicio.component').then(c => c.InicioComponent)
    },
    {
        path:'unoeste-secundaria',
        loadComponent:() => import('./pages/secundaria/secundaria.component').then(c => c.SecundariaComponent)
    },
    {
        path:'diretivas',
        loadComponent:() => import('./pages/diretivas/diretivas.component').then(c => c.DiretivasComponent)
    },
    {
        path:'form',
        loadComponent:() => import('./pages/form/form.component').then(c => c.FormComponent)
    }
];
