import { CommonModule } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TrimTextPipe } from './pipes/trim-text-pipe';
import { CurrencyConverterPipe } from './pipes/currency-converter-pipe';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, CommonModule, TrimTextPipe, CurrencyConverterPipe, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('session_31_and_above');

  // ========== Session 31 - Pipe to transform the data in DOM (upperCase, titleCase, currency, date and json) ============

  title2: WritableSignal<string> = signal<string>("nishaNt siNgH");  // uppercase & titlecase

  amount: WritableSignal<number> = signal<number>(20);    // currency

  date: WritableSignal<Date> = signal<Date>(new Date());  // date

  userDetail: WritableSignal<{name: string, email: string, city: string}> = signal<{name: string, email: string, city: string}>({
    name: "Nishant",
    email: "nishant@gmail.com",
    city: "Bareilly"
  });   // json

  name: WritableSignal<string> = signal<string>("Nishant");

  // ======== Session 32 - Custom Pipe to transform the data in DOM (Trim text and currency converter with & without parameters) ========

  sentence: WritableSignal<string> = signal<string>("I am Nishant Singh");
  price: WritableSignal<number> = signal<number>(100);



}
