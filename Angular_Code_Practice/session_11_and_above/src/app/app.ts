import { Component, signal, effect, computed, WritableSignal, Signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  //===========================================================================

  // Session 11 - Property Binding

  btnDisable = false; // Initialize the button as disabled
  inputReadonly = false; // Initialize the input as editable
  url = "https://angular.io/assets/images/logos/angular/angular.png";

  toggleDisable(){
    this.btnDisable = !this.btnDisable;
  }

  toggleReadonly(){
    this.inputReadonly = !this.inputReadonly;
  }

  //===========================================================================

  // Session 12 - Signals and nornal properties/variables

  data = 10;
  count = signal(0);

  // constructor(){
  //   effect(() => {
  //     console.log("Data :", this.data);
  //   })

  //   effect(() =>{
  //     console.log("Count :", this.count());
  //     if(this.count() > 9){
  //       this.count.set(0);
  //     }
  //   })
  // };

  updateData(){
    this.data += 1;
  }

  updateCount(){
    this.count.update((value) => value + 1);
  }


  //===========================================================================

  // Session 13 - computed signals and normal signals

  // Normal property

  height = 100;
  width = 200;
  area = this.height * this.width; // Normal property

  updateHeight(){
    this.height +=10;
    this.area = this.height * this.width; // Update area again when height changes.
  }


  // Signal
  heightSignal = signal(100);
  widthSignal = signal(200);

  areaSignal = computed(() =>{
    return this.heightSignal() * this.widthSignal();
  })

  // constructor(){
  //   effect(() => {
  //     console.log("normal height :", this.height);
  //   })

  //   effect(() =>{
  //     console.log("Signal height :", this.heightSignal());
  //   })
  // };

  updateHeightSignal(){
    this.heightSignal.update((value) => value + 10);
  }


  //===========================================================================

  // Session 14 - Effects and Signals
  speed = signal(0);
  color = "black";
  colorSignal = signal("black");
  fruit = signal("Apple");

  constructor(){
    effect(() =>{
      console.log("Speed is :", this.speed());

      if(this.speed() > 0 && this.speed() < 80){
        this.color = "green";
        this.colorSignal.set("green");
      }
      else if(this.speed() >= 80 && this.speed() < 120){
        this.color = "orange";
        this.colorSignal.set("orange");
      }
      else if(this.speed() >= 120){
        this.color = "red";
        this.colorSignal.set("red");
      }
    })
  }

  increaseSpeed(){
    this.speed.update((value) => value + 10);
  }

  changeFruit(){
    this.fruit.set("Mango");
  }

  //===========================================================================
  // Session 15 - Signal and Value data types


  //data2: WritableSignal<number | string | boolean | undefined> = signal<number | string | boolean | undefined>(10);
  data2: WritableSignal<number | string | boolean | undefined> = signal(10);
  speed2: Signal<number> = computed<number>(() => 90);
  users: WritableSignal<string[]> = signal(["nishant","rohit","amit"])

  updateData2(){
    this.data2.set("Nishant");
  }

  updateUsers(){
    if(this.users().includes("suresh".toLowerCase())){
      alert("User already exists");
      return;
    }
    this.users.update((value) => [...value, "suresh"]);
  }


  //=========================================================================== 
  // Session 16.1 - Counter App Using Signal

  val: WritableSignal<number> = signal<number>(0);

  increaseVal(){
    this.val.update((value) => value + 1);
  }

  decreaseVal(){
    if(this.val() > 0){
      this.val.update((value) => value - 1);
    }
  }

  resetVal(){
    this.val.set(0);
  }


  //=========================================================================== 
  // Session 16.2 - get and set the value using signals


  name: WritableSignal<string>=signal<string>("singh")

  setValue(val: string){
    this.name.set(val);
  }

  resetClicked(){
    this.name.set("Nishant")
  }

}
