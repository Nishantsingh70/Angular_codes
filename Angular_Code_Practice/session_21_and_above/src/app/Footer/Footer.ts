import { Component, WritableSignal, signal } from "@angular/core";


@Component({
    selector: 'app-footer',
    templateUrl: './Footer.html',
    styleUrls: ['./Footer.css']
})


export class Footer{
    name: WritableSignal<string> = signal<string>("Nishant Singh");
}