import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { MessageService } from 'primeng/api';
import { CustomerService } from '../../resources/services/customer.service';
import { Customer } from '../../resources/models/Customer';

@Component({
  selector: 'app-customer-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, TableModule, InputTextModule, ButtonModule],
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss'],
  providers: [MessageService]
})
export class CustomerEditComponent implements OnInit {
  customer: Customer = new Customer();
  isEditMode: boolean = false;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    console.log(`${this.constructor.name}: ` + "ngOnInit...");
    const state = this.router.getCurrentNavigation()?.extras.state as { customer: Customer };
    if (state && state.customer) {
      this.isEditMode = true
      this.customer = state.customer;
    } else {
      this.customer = this.route.snapshot.params['id'];
      if (this.customer) {
        this.isEditMode = true;
        //this.customer = id
        /*this.customerService.getCustomerById(id).subscribe((data: Customer) => {
          this.customer = data;
        }, error => {
          this.errorMessage = 'Erro ao carregar os dados do cliente.';
          console.error(error);
        }*/
        
      }
    }
  }


  submitCustomer() {
    console.log(`${this.constructor.name}: ` + "submitCustomer...");

    if (this.isEditMode) {
      this.customerService.updateCustomer(this.customer).subscribe(() => {
        this.router.navigate(['/customers']);
      }, error => {
        this.errorMessage = 'Erro ao atualizar o cliente.';
        console.error(error);
      });
    } else {
      this.customerService.addCustomer(this.customer).subscribe(() => {
        this.router.navigate(['/home/customers/add']);
      }, error => {
        this.errorMessage = 'Erro ao adicionar o cliente.';
        console.error(error);
      });
    }
  }
}