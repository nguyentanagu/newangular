import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from "./shared/header-layout/header-layout.component";

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, HeaderLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nameBtn = 'Click me!';
  
  clickMessage = '';
  
  handleClickMe(): void {
    this.clickMessage = 'Click me hello world';
  }
  updateField(): void{
    console.log('Hello world');
  }
}
