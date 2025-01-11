import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CustomerService } from '../../resources/services/customer.service';
import { Customer } from '../../resources/models/Customer';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [CommonModule, ButtonModule, TableModule],
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})

export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
    this.refreshCustomerList();
  }

  addCustomer() {
    this.router.navigate(['/customers/add']);
  }

  editCustomer(id: number) {
    this.router.navigate(['/customers/edit', id]);
  }

  deleteCustomer(id: number) {
    // Implementar a lógica de exclusão
  }

  refreshCustomerList() {
    this.customerService.getCustomerList().subscribe((data: Customer[]) => {
      this.customers = data;
    }, error => {
      console.error('Erro ao buscar a lista de clientes', error);
    });
  }
}