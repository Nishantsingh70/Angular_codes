import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorComponent } from './components/color/color.component';
import { RedComponent } from './components/red/red.component';
import { GreenComponent } from './components/green/green.component';
import { BlueComponent } from './components/blue/blue.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ProductComponent } from './components/product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmpDetailsComponent } from './components/emp-details/emp-details.component';
import { PersonComponent } from './components/person/person.component';
import { PersonDetailsComponent } from './components/person-details/person-details.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { HighlighterDirective } from './directives/highlighter.directive';
import { CustomerComponent } from './components/customer/customer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { CustomerinfoComponent } from './components/customerinfo/customerinfo.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { PipedemoComponent } from './components/pipedemo/pipedemo.component';
import { TitlePipe } from './pipes/title.pipe';
import { TemplatedrivendemoComponent } from './components/templatedrivendemo/templatedrivendemo.component';
import { ModeldrivendemoComponent } from './components/modeldrivendemo/modeldrivendemo.component';
import { BookModule } from './modules/book/book.module';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ColorComponent,
    RedComponent,
    GreenComponent,
    BlueComponent,
    EmployeeComponent,
    EmpDetailsComponent,
    PersonComponent,
    PersonDetailsComponent,
    CalculatorComponent,
    HighlighterDirective,
    CustomerComponent,
    HomeComponent,
    CustomerinfoComponent,
    PagenotfoundComponent,
    PipedemoComponent,
    TitlePipe,
    TemplatedrivendemoComponent,
    ModeldrivendemoComponent,
    // AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BookModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
