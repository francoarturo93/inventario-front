import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ventas';
  isCollapsed = false; // Variable para manejar el estado del sidebar

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed; // Alternar entre colapsado y expandido
  }
}
