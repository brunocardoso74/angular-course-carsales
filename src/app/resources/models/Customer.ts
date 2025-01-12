export class Customer {
  _id: string;
  name: string;
  email: string;
  telephone: string;
  
  constructor( _id: string = '', name: string = '', email: string = '', telephone: string = '' ) {
      this._id = _id;
      this.name = name;
      this.email = email;
      this.telephone = telephone;
  }
}
