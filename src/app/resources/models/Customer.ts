export class Customer {
  id: string;
  name: string;
  email: string;
  telephone: string;
  
  constructor( id: string = '', name: string = '', email: string = '', telephone: string = '' ) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.telephone = telephone;
  }
}
