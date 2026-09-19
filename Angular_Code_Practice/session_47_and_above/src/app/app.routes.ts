import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', loadComponent: () => import('./components/product-list/product-list').then((c)=> c.ProductList)},
    {path: 'detail/:id', loadComponent: () => import('./components/product-details/product-details').then((c)=> c.ProductDetails)}
];
