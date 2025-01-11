import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../resources/services/customer.service';
import { Customer } from '../../resources/models/Customer';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-customer-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, InputTextModule, ButtonModule],
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss'],
  providers: [MessageService]
})
export class CustomerEditComponent implements OnInit {
  customer: Customer = { id: "", name: '', email: '', telephone: '' };
  isEditMode: boolean = false;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEditMode = true;
      this.customerService.getCustomerById(id).subscribe((data: Customer) => {
        this.customer = data;
      }, error => {
        this.errorMessage = 'Erro ao carregar os dados do cliente.';
        console.error(error);
      });
    }
  }

  submitCustomer() {
    if (this.isEditMode) {
      this.customerService.updateCustomer(this.customer).subscribe(() => {
        this.router.navigate(['/customers']);
      }, error => {
        this.errorMessage = 'Erro ao atualizar o cliente.';
        console.error(error);
      });
    } else {
      this.customerService.addCustomer(this.customer).subscribe(() => {
        this.router.navigate(['/customers']);
      }, error => {
        this.errorMessage = 'Erro ao adicionar o cliente.';
        console.error(error);
      });
    }
  }
}