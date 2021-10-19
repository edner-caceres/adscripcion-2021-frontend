import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Adcription Program - Students frontend';
  sidebarOpen = true;
  
  sidebarOpenHandler(event:any): void{
      this.sidebarOpen = !this.sidebarOpen;
  } 
}
