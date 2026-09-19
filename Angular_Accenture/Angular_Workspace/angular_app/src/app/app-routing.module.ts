import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './components/customer/customer.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { CustomerinfoComponent } from './components/customerinfo/customerinfo.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { PipedemoComponent } from './components/pipedemo/pipedemo.component';
import { TemplatedrivendemoComponent } from './components/templatedrivendemo/templatedrivendemo.component';
import { ModeldrivendemoComponent } from './components/modeldrivendemo/modeldrivendemo.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', loadComponent: () => import('./components/about/about.component').then((m) => m.AboutComponent)},
  { path: 'products', component: ProductComponent },
  { path: 'employees', component: EmployeeComponent },
  { path: 'pipedemo', component: PipedemoComponent },
  { path: 'templatedrivendemo', component: TemplatedrivendemoComponent },
  { path: 'modeldrivendemo', component: ModeldrivendemoComponent },
  //{ path: 'color', loadComponent: () => import('./components/color/color.component').then((c) => c.ColorComponent)},
  { path: 'customers', component: CustomerComponent,
    children: [
      {path : ':cno', component : CustomerinfoComponent}
    ]
   },
  { path: 'book', loadChildren: () => import('./modules/book/book.module').then(m => m.BookModule) },
  // { path: 'customers/:cno', component: CustomerinfoComponent },
  { path: '**', component: PagenotfoundComponent },  // wildcard route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
