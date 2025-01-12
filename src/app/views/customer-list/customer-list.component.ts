import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CustomerService } from '../../resources/services/customer.service';
import { Customer } from '../../resources/models/Customer';
import { state } from '@angular/animations';

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
    console.log('Inicializando a lista de clientes');
    this.refreshCustomerList();
  }

  addCustomer() {
    console.log('Adicionando um novo cliente');
    this.router.navigate(['/home/customers/add']);
  }

  editCustomer(customer: Customer) {
    console.log('Editando o cliente', customer._id);
    this.router.navigate(['/home/customers/edit', customer, { state: customer }]);
  }

  deleteCustomer(id: string) {
    // Implementar a lógica de exclusão
  }

  refreshCustomerList() {
    this.customerService.getCustomerList().subscribe((
      data: Customer[]
      ) => {
      this.customers = data;
    }, error => {
      console.error('Erro ao buscar a lista de clientes', error);
    });
  }
}