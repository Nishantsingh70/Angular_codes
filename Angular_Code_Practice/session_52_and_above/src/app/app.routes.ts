import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', loadComponent: () => import('./components/user-list/user-list').then((c) => c.UserList)},
    {path: 'add', loadComponent: () => import('./components/add-user/add-user').then((c) => c.AddUser)},
    {path: 'edit/:id', loadComponent: () => import('./components/edit-user/edit-user').then((c) => c.EditUser)}
];
