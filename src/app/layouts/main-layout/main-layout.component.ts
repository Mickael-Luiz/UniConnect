import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopbarComponent } from "./topbar/topbar.component";

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, TopbarComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
