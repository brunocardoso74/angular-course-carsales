import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    PanelMenuModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'] // Corrigido de styleUrl para styleUrls
})
export class HomeComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-fw pi-home',
        routerLink: '/home/dashboard'
      },
      {
        label: 'Users',
        icon: 'pi pi-fw pi-users',
        routerLink: '/home/users'
      },
      {
        label: 'Clientes',
        icon: 'pi pi-fw pi-users',
        routerLink: '/home/customers'
      }
    ];
  }
}
