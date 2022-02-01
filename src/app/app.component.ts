import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {





  login(data:any){

console.warn(data);

  }

  register(item:any){

console.warn(item);

  }
}
