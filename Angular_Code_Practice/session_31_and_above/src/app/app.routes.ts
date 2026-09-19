import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Profile } from './components/profile/profile';
import { Login } from './components/login/login';
import { Logout } from './components/logout/logout';
import { PageNotFound } from './components/page-not-found/page-not-found';
import { Users } from './components/users/users';
import { UserDetails } from './components/user-details/user-details';
import { Setting1 } from './components/setting1/setting1';
import { User1 } from './components/user1/user1';
import { Profile1 } from './components/profile1/profile1';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'Home', component: Home},
    {path: 'About', component: About},
    {path: 'About/:name', component: About},
    {path: 'About/:name/:age', component: About},
    {path: 'Contact', component: Contact},
    {path: 'Profile', component: Profile},
    {path: 'Login', component: Login},
    {path: 'Logout', component: Logout},
    {path: 'Users', component: Users},
    {path: 'UserDetails/:id', component: UserDetails},
    // {path: 'Home1', component: Home1},
    {path: 'Home1', loadComponent: () => import('./components/home1/home1').then((c) => c.Home1)},  // lazy loading
    {path: 'User1', //component: User1,
        loadComponent: () => import('./components/user1/user1').then((c) => c.User1),
        children: [
            {path: '', redirectTo: 'Profile1', pathMatch: 'full'},
            {path: 'Profile1', loadComponent: () => import('./components/profile1/profile1').then((c) => c.Profile1)}, // lazy loading
            {path: 'Setting1', loadComponent: () => import('./components/setting1/setting1').then((c) => c.Setting1)}, // lazy loading
        ]
    },
    {path: '**', component: PageNotFound}  // wildcard route
];
