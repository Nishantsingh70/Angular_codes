import { Component, signal, ViewChild, ViewContainerRef, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserDetails } from './components/user-details/user-details';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { form, FormField, maxLength, minLength, required, email } from '@angular/forms/signals';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, FormField],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('session_41_and_above');

  // ========== Session 41 - Dynamic component loading with ngOnInit and button click, container, user-details component ========

  @ViewChild('userDetails', { read: ViewContainerRef })
  user: ViewContainerRef | undefined;

  async loadAllComponents(){
    this.user?.clear();
    //console.log("Hello");
    const { UserDetails } = await import('./components/user-details/user-details');
    this.user?.createComponent(UserDetails);
  }


  // ========== Session 41 - Form and its types, Reactive Form, Signal Reactive Form and Template Driven Form ========

  // Reactive Form - Better performance, better control on validations in ts file & used in big applications
  // Signal Form - We use signal with Reactive forms
  // Template Driven Form - Easy to implement, less control on ts file & used in small applications



  // ========== Session 42 - Reactive Form, form control, binding with formControl, get and set value with form control ========

  name = new FormControl('Test');             // setting default values in name input field
  email = new FormControl('Test@gmail.com');  // setting default values in email input field
  password = new FormControl('Test@123');     // setting default values in password input field

  nameSignal: WritableSignal<string | null>  = signal<string | null>('');
  emailSignal: WritableSignal<string | null>  = signal<string | null>('');
  passwordSignal: WritableSignal<string | null> = signal<string | null>('');

  login(){
    console.log("Name : " + this.name.value, ", Email : " + this.email.value, ", Password : " + this.password.value);
    // console.log(this.name.value);
    // console.log(this.email.value);
    // console.log(this.password.value);
    this.nameSignal.set(this.name.value);
    this.emailSignal.set(this.email.value);
    this.passwordSignal.set(this.password.value);
  }

  reset(){
    this.name.setValue('');
    this.email.setValue('');
    this.password.setValue('');
  }

  // ==== Session 43 - Reactive Form, form group, form control, binding with form group & formControlName, get and set value with form control ========


  name1Signal: WritableSignal<string | undefined | null>  = signal<string | undefined | null>('');
  email1Signal: WritableSignal<string | undefined | null>  = signal<string | undefined | null>('');
  password1Signal: WritableSignal<string | undefined | null> = signal<string | undefined | null>('');

  loginForm = new FormGroup({
      name1: new FormControl('FormGroup Test'),           // setting default values in name input field
      email1: new FormControl('FormGroupTest@gmail.com'), // setting default values in email input field
      password1: new FormControl('FormGroupTest@123')     // setting default values in password input field
  })

  addUser(){
    console.log("Name : " + this.loginForm.value.name1, ", Email : " + this.loginForm.value.email1, ", Password : " + this.loginForm.value.password1);
    this.name1Signal.set(this.loginForm.value.name1);
    this.email1Signal.set(this.loginForm.value.email1);
    this.password1Signal.set(this.loginForm.value.password1);
  }

  reset1(){
    this.loginForm.setValue({
      name1: '',
      email1: '',
      password1: ''
    })
  }

  // ==== Session 43.2 - Reactive Form, form group, form control, binding with form group & formControlName, apply validation on fields ========

  name2Signal: WritableSignal<string | undefined | null>  = signal<string | undefined | null>('');
  email2Signal: WritableSignal<string | undefined | null>  = signal<string | undefined | null>('');
  password2Signal: WritableSignal<string | undefined | null> = signal<string | undefined | null>('');

  login2Form = new FormGroup({
      name2: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]), // setting default values in name input field
      email2: new FormControl('', [Validators.required, Validators.email]), // setting default values in email input field
      password2: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)])     // setting default values in password input field
  })


  get uname(){
    return this.login2Form.get("name2");
  }

  get uemail(){
    return this.login2Form.get("email2");
  }

  get upassword(){
    return this.login2Form.get("password2");
  }

  addUser2(){
    console.log("Name : " + this.login2Form.value.name2, ", Email : " + this.login2Form.value.email2, ", Password : " + this.login2Form.value.password2);
    this.name2Signal.set(this.login2Form.value.name2);
    this.email2Signal.set(this.login2Form.value.email2);
    this.password2Signal.set(this.login2Form.value.password2);
  }

  reset2(){
    this.login2Form.setValue({
      name2: '',
      email2: '',
      password2: ''
    })
  }


  // ==== Session 44 - Reactive Form with signals, field binding, get and set methods ======== 
  
  name3Signal: WritableSignal<string | undefined | null>  = signal<string | undefined | null>('');
  email3Signal: WritableSignal<string | undefined | null>  = signal<string | undefined | null>('');
  password3Signal: WritableSignal<string | undefined | null> = signal<string | undefined | null>('');

  loginModel: WritableSignal<{name3: string, email3: string, password3: string}> = signal<{name3: string, email3: string, password3: string}>({
    name3: 'Test',
    email3: 'test@gmail.com',
    password3: 'testing'
  })

  login3Form = form(this.loginModel);

  addUser3(){
    console.log("Name : " + this.login3Form.name3().value(), ", Email : " + this.login3Form.email3().value(), ", Password : " + this.login3Form.password3().value());
    this.name3Signal.set(this.login3Form.name3().value());
    this.email3Signal.set(this.login3Form.email3().value());
    this.password3Signal.set(this.login3Form.password3().value());
  }

  reset3(){
    this.login3Form.name3().value.set('');
    this.login3Form.email3().value.set('');
    this.login3Form.password3().value.set('');
  }

  // ==== Session 45 - Reactive Form with signals, field binding, get and set methods, apply validation ========

  name4Signal: WritableSignal<string | undefined | null>  = signal<string | undefined | null>('');
  email4Signal: WritableSignal<string | undefined | null>  = signal<string | undefined | null>('');
  password4Signal: WritableSignal<string | undefined | null> = signal<string | undefined | null>('');

  login2Model: WritableSignal<{name4: string, email4: string, password4: string}> = signal<{name4: string, email4: string, password4: string}>({
    name4: '',
    email4: '',
    password4: ''
  })

  login4Form = form(this.login2Model, (field) =>[
    required(field.name4, {message: 'Name is required'}),
    minLength(field.name4, 3, {message: 'Name should be minimum 3 characters'}),
    maxLength(field.name4, 20, {message: 'Name should be maximum 20 characters'}),
    required(field.email4, {message: 'Email is required'}),
    email(field.email4, {message: 'Email is not valid'}),
    required(field.password4, {message: 'Password is required'}),
    minLength(field.password4, 3, {message: 'Password should be minimum 3 characters'}),
    maxLength(field.password4, 20, {message: 'Password should be maximum 20 characters'})
  ]);

  addUser4(){
    console.log("Name : " + this.login4Form.name4().value(), ", Email : " + this.login4Form.email4().value(), ", Password : " + this.login4Form.password4().value());
    this.name4Signal.set(this.login4Form.name4().value());
    this.email4Signal.set(this.login4Form.email4().value());
    this.password4Signal.set(this.login4Form.password4().value());
  }

  reset4(){
    this.login4Form.name4().value.set('');
    this.login4Form.email4().value.set('');
    this.login4Form.password4().value.set('');

    this.name4Signal.set('')
    this.email4Signal.set('')
    this.password4Signal.set('')
  }

  // ========== Session 46 - Template Driven form, ngForm, ngSubmit ==============================

  userDetail: any = signal(undefined);
  adduser5(data: NgForm){
    console.log(data);
    this.userDetail.set(data);
  }






}



